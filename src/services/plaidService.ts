import axios from 'axios';

export const plaidApi = {
  async getLinkToken(): Promise<string> {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/plaid/create-link-token',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.linkToken;
    } catch (error) {
      console.error('Error getting link token:', error);
      throw error;
    }
  },

   async exchangePublicToken(publicToken: string, metadata: any): Promise<any> {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/plaid/exchange-token',
        { publicToken, metadata },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error exchanging public token:', error);
      throw error;
    }
  },

   async getAccounts(): Promise<any[]> {
    try {
      const response = await axios.get('http://localhost:3000/api/plaid/accounts', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.accounts || [];
    } catch (error) {
      console.error('Error getting accounts:', error);
      throw error;
    }
  },
};

 export const openPlaidLink = async (linkToken: string): Promise<{ success: boolean, metadata?: any }> => {
  return new Promise((resolve, reject) => {
    try {
       const PlaidLinkComponent = require('react-native-plaid-link-sdk').PlaidLink;

      if (!PlaidLinkComponent) {
        throw new Error('PlaidLink component not found');
      }

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

       require('react-native-plaid-link-sdk').openLink(config);
    } catch (error) {
      console.error('Error opening Plaid Link:', error);

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