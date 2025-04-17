import { Platform } from 'react-native';
import axios from 'axios';

const API_URL = 'http://your-api-url.com/api'; // Replace with your actual API URL

// Different URL based on platform (for local development)
const getApiUrl = () => {
  if (__DEV__) {
    return Platform.OS === 'android'
      ? 'http://10.0.2.2:5000/api' // Android emulator localhost
      : 'http://localhost:5000/api'; // iOS simulator localhost
  }
  return API_URL;
};

export const plaidApi = {
  // Get link token from our backend
  async getLinkToken(): Promise<string> {
    try {
      const response = await axios.post(
        `${getApiUrl()}/plaid/create-link-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${await getAuthToken()}`, // Function to get your auth token
          },
        }
      );
      console.log('🚀 ~ getLinkToken ~ response.data.linkToken:', response.data.linkToken);
      return response.data.linkToken;
    } catch (error) {
      console.error('Error getting link token:', error);
      throw error;
    }
  },

  // Exchange public token
  async exchangePublicToken(publicToken: string, metadata: any): Promise<any> {
    try {
      const response = await axios.post(
        `${getApiUrl()}/plaid/exchange-token`,
        { publicToken, metadata },
        {
          headers: {
            Authorization: `Bearer ${await getAuthToken()}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error exchanging public token:', error);
      throw error;
    }
  },

  // Get connected bank accounts
  async getAccounts(): Promise<any[]> {
    try {
      const response = await axios.get(`${getApiUrl()}/plaid/accounts`, {
        headers: {
          Authorization: `Bearer ${await getAuthToken()}`,
        },
      });
      return response.data.accounts || [];
    } catch (error) {
      console.error('Error getting accounts:', error);
      throw error;
    }
  },
};

// Function to get authentication token (implement based on your auth system)
const getAuthToken = async (): Promise<string> => {
  // Replace with your actual token retrieval logic
  // This could be from secure storage, Redux, etc.
  return 'your-auth-token';
};

// Function to open Plaid Link
export const openPlaidLink = async (linkToken: string): Promise<{ success: boolean, metadata?: any }> => {
  return new Promise((resolve, reject) => {
    try {
      // Dynamically create a component to use the hook
      const PlaidLinkComponent = require('react-native-plaid-link-sdk').PlaidLink;

      if (!PlaidLinkComponent) {
        throw new Error('PlaidLink component not found');
      }

      // Configure and render PlaidLink component
      const config = {
        token: linkToken,
        onSuccess: async (success: { publicToken: string; metadata: any }) => {
          try {
            const result = await plaidApi.exchangePublicToken(
              success.publicToken,
              success.metadata
            );
            resolve({ success: true, metadata: result });
          } catch (error) {
            console.error('Error in Plaid Link onSuccess:', error);
            reject(error);
          }
        },
        onExit: (exit: any) => {
          if (exit.error) {
            console.error('Plaid Link exit with error:', exit.error);
            reject(new Error(exit.error.message || 'Plaid Link exit with error'));
          } else {
            resolve({ success: false });
          }
        },
      };

      // Use the component's open method directly from imported SDK
      require('react-native-plaid-link-sdk').openLink(config);
    } catch (error) {
      console.error('Error opening Plaid Link:', error);

      // Try alternative approach with newer version of SDK
      try {
        const { createPlaidLink } = require('react-native-plaid-link-sdk');

        const linkHandler = createPlaidLink({
          token: linkToken,
          onSuccess: async (success: { publicToken: string; metadata: any }) => {
            try {
              const result = await plaidApi.exchangePublicToken(
                success.publicToken,
                success.metadata
              );
              resolve({ success: true, metadata: result });
            } catch (error) {
              console.error('Error in Plaid Link onSuccess:', error);
              reject(error);
            }
          },
          onExit: (exit: any) => {
            if (exit.error) {
              console.error('Plaid Link exit with error:', exit.error);
              reject(new Error(exit.error.message || 'Plaid Link exit with error'));
            } else {
              resolve({ success: false });
            }
          },
        });

        linkHandler.open();
      } catch (secondError) {
        console.error('Failed alternative approach:', secondError);
        reject(new Error('Failed to open Plaid Link. Check Plaid SDK version compatibility.'));
      }
    }
  });
};