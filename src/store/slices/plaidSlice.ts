import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { plaidApi } from '../../services/plaidService';

// Define types
interface BankAccount {
  id: string;
  name: string;
  mask: string;
  type: string;
  subtype: string;
  balances: {
    available: number;
    current: number;
    limit?: number;
  };
}

interface PlaidState {
  linkToken: string | null;
  accounts: BankAccount[];
  selectedAccountId: string | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: PlaidState = {
  linkToken: null,
  accounts: [],
  selectedAccountId: null,
  loading: false,
  error: null,
};

// Async thunks
export const getLinkToken = createAsyncThunk(
  'plaid/getLinkToken',
  async (_, { rejectWithValue }) => {
    try {
      return await plaidApi.getLinkToken();
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to get link token');
    }
  }
);

export const fetchBankAccounts = createAsyncThunk(
  'plaid/fetchBankAccounts',
  async (_, { rejectWithValue }) => {
    try {
      return await plaidApi.getAccounts();
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch bank accounts');
    }
  }
);

// Create the slice
const plaidSlice = createSlice({
  name: 'plaid',
  initialState,
  reducers: {
    selectAccount: (state, action) => {
      state.selectedAccountId = action.payload;
    },
    resetPlaidError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get link token
      .addCase(getLinkToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLinkToken.fulfilled, (state, action) => {
        state.linkToken = action.payload;
        state.loading = false;
      })
      .addCase(getLinkToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Fetch bank accounts
      .addCase(fetchBankAccounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBankAccounts.fulfilled, (state, action) => {
        state.accounts = action.payload;
        state.loading = false;
      })
      .addCase(fetchBankAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { selectAccount, resetPlaidError } = plaidSlice.actions;
export default plaidSlice.reducer;