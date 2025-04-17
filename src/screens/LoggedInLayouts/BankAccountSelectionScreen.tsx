import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, ActivityIndicator, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { fetchBankAccounts, getLinkToken, selectAccount } from '../../store/slices/plaidSlice';
import { openPlaidLink } from '../../services/plaidService';

const BankAccountSelectionScreen = () => {
  const dispatch = useAppDispatch(); // Use the typed dispatch instead
  const navigation: any = useNavigation();
  const { accounts, loading, error } = useSelector(
    (state: RootState) => state.plaid
  );
  const [linking, setLinking] = useState(false);

  useEffect(() => {
    // Fetch existing accounts on screen load
    dispatch(fetchBankAccounts());
  }, [dispatch]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLinkBankAccount = async () => {
    try {
      setLinking(true);

      // Get link token from our backend
      const token = await dispatch(getLinkToken()).unwrap();

      // Open Plaid Link
      const result = await openPlaidLink(token);

      if (result.success) {
        // Fetch updated accounts after linking
        await dispatch(fetchBankAccounts());
      }
    } catch (error) {
      console.error('Error linking bank account:', error);
    } finally {
      setLinking(false);
    }
  };

  const handleSelectAccount = (accountId: string) => {
    dispatch(selectAccount(accountId));
    navigation.navigate('HomeScreen'); // Navigate to the next screen after selection
  };

  const renderAccountItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.accountItem}
      onPress={() => handleSelectAccount(item.id)}
    >
      <View style={styles.accountInfo}>
        <Text style={styles.accountName}>{item.name}</Text>
        <Text style={styles.accountDetails}>
          {item.type} •••• {item.mask}
        </Text>
      </View>
      <Text style={styles.accountBalance}>
        ${item.balances?.available?.toFixed(2) || '0.00'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={handleBack}
        accessibilityLabel="Go back"
        accessibilityRole="button">
        <Image
          source={require('../../../assets/images/back-arrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.heading}>Bank Account Selection</Text>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1F75FE" />
          <Text style={styles.loadingText}>
            {linking ? 'Connecting to your bank...' : 'Loading your accounts...'}
          </Text>
        </View>
      ) : (
        <>
          {accounts && accounts.length > 0 ? (
            <View style={styles.accountsContainer}>
              <Text style={styles.sectionTitle}>Your Connected Accounts</Text>
              <Text style={styles.sectionSubtitle}>Select an account to continue</Text>

              <FlatList
                data={accounts}
                renderItem={renderAccountItem}
                keyExtractor={(item) => item.id}
                style={styles.accountsList}
              />

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={handleLinkBankAccount}
                disabled={loading}
              >
                <Text style={styles.secondaryButtonText}>Link Another Account</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <TouchableOpacity
                style={styles.linkButton}
                onPress={handleLinkBankAccount}
                disabled={loading}
                accessibilityLabel="Link Bank Account"
                accessibilityRole="button"
              >
                <Text style={styles.linkButtonText}>Link Bank Account</Text>
              </TouchableOpacity>

              <Text style={styles.infoText}>
                You will be redirected to securely link your bank account
              </Text>
            </>
          )}
        </>
      )}

      {error && <Text style={styles.errorText}>Error: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#091522',
    padding: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkButton: {
    marginTop: 32,
    backgroundColor: '#1F75FE',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  linkButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    marginTop: 20,
    backgroundColor: 'transparent',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1F75FE',
  },
  secondaryButtonText: {
    color: '#1F75FE',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 13,
    opacity: 0.7,
    textAlign: 'center',
    maxWidth: 280,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(9, 21, 34, 0.6)',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loadingText: {
    color: '#fff',
    marginTop: 12,
    fontSize: 14,
  },
  errorText: {
    color: '#FF3B30',
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  },
  accountsContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: '#fff',
    opacity: 0.7,
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  accountsList: {
    width: '100%',
    maxHeight: '70%',
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  accountDetails: {
    color: '#fff',
    opacity: 0.7,
    fontSize: 12,
  },
  accountBalance: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BankAccountSelectionScreen;