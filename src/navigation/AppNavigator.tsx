import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import EmailInputScreen from '../screens/auth/EmailInputScreen';
import VerifyEmailScreen from '../screens/auth/VerifyEmailScreen';
import PhoneNumberScreen from '../screens/auth/ContactInfoScreen';
import OTPVerificationScreen from '../screens/auth/CodeVerifyScreen';
import SuccessSignup from '../screens/auth/SuccessSignupScreen';
import CreatePasswordScreen from '../screens/auth/CreateAccountScreen';
import AccountSuccess from '../screens/auth/AccountSuccessScreen';
import BonusScreen from '../screens/auth/BonusScreen';
import WelcomeUser from '../screens/auth/welcomeUserScreen';
import BankAccountSelectionScreen from '../screens/LoggedInLayouts/BankAccountSelectionScreen';
import SuccessScreen from '../screens/LoggedInLayouts/SuccessScreen';
import AboutScreen from '../screens/auth/AboutScreen';
import Dashboard from '../screens/LoggedInLayouts/Dashboard';
import WelcomeStushScreen from '../screens/LoggedInLayouts/WelcomeStush';
import Wedifferent from '../screens/LoggedInLayouts/WeDifferent';
import UserIdentification from '../screens/LoggedInLayouts/Identification';
import DisclosuresScreen from '../screens/LoggedInLayouts/Disclouser';
import MyJob from '../screens/LoggedInLayouts/MyJob';
import CompanyInfo from '../screens/LoggedInLayouts/CompanyInfo';
import InfoAboutCompany from '../screens/LoggedInLayouts/InfoAboutCompany';
import WorkInfo from '../screens/LoggedInLayouts/WorkInfo';
import WorkFrequency from '../screens/LoggedInLayouts/WorkFrequency';
import EarnedFirst from '../screens/LoggedInLayouts/EarnedFirst';
import EarnedSecond from '../screens/LoggedInLayouts/EarnedSecond';
import PlaidLinkScreen from '../screens/LoggedInLayouts/PlaidLink';
import SuccessfullyCreated from '../screens/LoggedInLayouts/SuccessfullyCreated';
import ConnectScreen from '../screens/LoggedInLayouts/ConnectScreen';
import SelectBankScreen from '../screens/LoggedInLayouts/SelectBankScreen';
import BankSelectedScreen from '../screens/LoggedInLayouts/BankSelectedScreen';
import PayrollProviderScreen from '../screens/LoggedInLayouts/PayrollProviderScreen';
import SecondBankSelectScreen from '../screens/LoggedInLayouts/SecondBankSelectScreen';
import LinkedSuccessScreen from '../screens/LoggedInLayouts/LinkedSuccessScreen';
import HomeAddressScreen from '../screens/LoggedInLayouts/HomeAddressScreen';
import SetupSuccessScreen from '../screens/LoggedInLayouts/SetupSuccessScreen';
import EarnedPayoutScreen from '../screens/LoggedInLayouts/EarnedPayoutScreen';
import AnotherBankScreen from '../screens/LoggedInLayouts/AnotherBankScreen';
import AuthorizationScreen from '../screens/LoggedInLayouts/AuthorizationScreen';
import SecondBankSceen from '../screens/LoggedInLayouts/SecondBankSceen';
import AnotherPayrollScreen from '../screens/LoggedInLayouts/AnotherPayrollScreen';
import PayrollAuthorizationScreen from '../screens/LoggedInLayouts/PayrollAuthorizationScreen';
import EnableLocationScreen from '../screens/LoggedInLayouts/EnableLocationScreen';
import LocationVerificationScreen from '../screens/LoggedInLayouts/EnableLocations';
import AddEmployerScreen from '../screens/LoggedInLayouts/AddEmployerScreen';
import AddPayrollScreen from '../screens/LoggedInLayouts/AddPayrollScreen';
import HoursAccuracyScreen from '../screens/LoggedInLayouts/HoursAccuracyScreen';
import WorkDetailsScreen from '../screens/LoggedInLayouts/WorkDetailsScreen';
import PaySheduleScreen from '../screens/LoggedInLayouts/PaySheduleScreen';
import PayRateScreen from '../screens/LoggedInLayouts/PayRateScreen';
import EmploymentStatusScreen from '../screens/LoggedInLayouts/EmploymentStatusScreen';
import VerifyHoursScreen from '../screens/LoggedInLayouts/VerifyHoursScreen';
import AlmostCompleteScreen from '../screens/LoggedInLayouts/AlmostCompleteScreen';
import CongratulationScreen from '../screens/LoggedInLayouts/CongratulationScreen';
import ReceiveFundScreen from '../screens/LoggedInLayouts/ReceiveFundScreen';
import UnlimitedAccess from '../screens/LoggedInLayouts/UnlimitedAccess';









export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  RegisterScreen: undefined;
  AboutScreen: undefined;
  EmailInput: undefined;
  VerifyEmailScreen: undefined;
  PhoneNumberScreen: undefined;
  OTPVerificationScreen: undefined;
  SuccessSignup: undefined;
  CreatePasswordScreen: undefined;
  AccountSuccess: undefined;
  BonusScreen: undefined;
  WelcomeUser: undefined;
  Dashboard: undefined;
  BankAccountSelection: undefined;
  Success: undefined;
  WelcomeStushScreen: undefined;
  Wedifferent: undefined;
  UserIdentification: undefined;
  DisclosuresScreen: undefined;
  MyJob: undefined;
  CompanyInfo: undefined;
  InfoAboutCompany: undefined;
  WorkInfo: undefined;
  WorkFrequency: undefined;
  EarnedFirst: undefined;
  EarnedSecond: undefined;
  PlaidLinkScreen: undefined;
  SuccessfullyCreated: undefined;
  ConnectScreen: undefined;
  SelectBankScreen: undefined;
  BankSelectedScreen: undefined;
  PayrollProviderScreen: undefined;
  SecondBankSelectScreen: undefined;
  LinkedSuccessScreen: undefined;
  HomeAddressScreen: undefined;
  SetupSuccessScreen: undefined;
  EarnedPayoutScreen: undefined;
  AnotherBankScreen: undefined;
  AuthorizationScreen: undefined;
  SecondBankSceen: undefined;
  AnotherPayrollScreen: undefined;
  PayrollAuthorizationScreen: undefined;
  EnableLocations: undefined;
  EnableLocationScreen: undefined;
  LocationVerificationScreen: undefined;
  AddEmployerScreen: undefined;
  AddPayrollScreen: undefined;
  HoursAccuracyScreen: undefined;
  WorkDetailsScreen: undefined;
  PaySheduleScreen: undefined;
  PayRateScreen: undefined;
  EmploymentStatusScreen: undefined;
  VerifyHoursScreen: undefined;
  AlmostCompleteScreen: undefined;
  CongratulationScreen: undefined;
  ReceiveFundScreen: undefined;
  UnlimitedAccess: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="EmailInput" component={EmailInputScreen} />
      <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
      <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
      <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
      <Stack.Screen name="SuccessSignup" component={SuccessSignup} />
      <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
      <Stack.Screen name="AccountSuccess" component={AccountSuccess} />
      <Stack.Screen name="BonusScreen" component={BonusScreen} />
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="BankAccountSelection" component={BankAccountSelectionScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="WelcomeStushScreen" component={WelcomeStushScreen} />
      <Stack.Screen name="Wedifferent" component={Wedifferent} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="DisclosuresScreen" component={DisclosuresScreen} />
      <Stack.Screen name="MyJob" component={MyJob} />
      <Stack.Screen name="CompanyInfo" component={CompanyInfo} />
      <Stack.Screen name="InfoAboutCompany" component={InfoAboutCompany} />
      <Stack.Screen name="WorkInfo" component={WorkInfo} />
      <Stack.Screen name="WorkFrequency" component={WorkFrequency} />
      <Stack.Screen name="EarnedFirst" component={EarnedFirst} />
      <Stack.Screen name="EarnedSecond" component={EarnedSecond} />
      <Stack.Screen name="PlaidLinkScreen" component={PlaidLinkScreen} />
      <Stack.Screen name="SuccessfullyCreated" component={SuccessfullyCreated} />
      <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
      <Stack.Screen name="SelectBankScreen" component={SelectBankScreen} />
      <Stack.Screen name="BankSelectedScreen" component={BankSelectedScreen} />
      <Stack.Screen name="PayrollProviderScreen" component={PayrollProviderScreen} />
      <Stack.Screen name="SecondBankSelectScreen" component={SecondBankSelectScreen} />
      <Stack.Screen name="LinkedSuccessScreen" component={LinkedSuccessScreen} />
      <Stack.Screen name="HomeAddressScreen" component={HomeAddressScreen} />
      <Stack.Screen name="SetupSuccessScreen" component={SetupSuccessScreen} />
      <Stack.Screen name="EarnedPayoutScreen" component={EarnedPayoutScreen} />
      <Stack.Screen name="AnotherBankScreen" component={AnotherBankScreen} />
      <Stack.Screen name="AuthorizationScreen" component={AuthorizationScreen} />
      <Stack.Screen name="SecondBankSceen" component={SecondBankSceen} />
      <Stack.Screen name="AnotherPayrollScreen" component={AnotherPayrollScreen} />
      <Stack.Screen name="PayrollAuthorizationScreen" component={PayrollAuthorizationScreen} />
      <Stack.Screen name="EnableLocationScreen" component={EnableLocationScreen} />
      <Stack.Screen name="LocationVerificationScreen" component={LocationVerificationScreen} />
      <Stack.Screen name="AddEmployerScreen" component={AddEmployerScreen} />
      <Stack.Screen name="AddPayrollScreen" component={AddPayrollScreen} />
      <Stack.Screen name="HoursAccuracyScreen" component={HoursAccuracyScreen} />
      <Stack.Screen name="WorkDetailsScreen" component={WorkDetailsScreen} />
      <Stack.Screen name="PaySheduleScreen" component={PaySheduleScreen} />
      <Stack.Screen name="PayRateScreen" component={PayRateScreen} />
      <Stack.Screen name="EmploymentStatusScreen" component={EmploymentStatusScreen} />
      <Stack.Screen name="VerifyHoursScreen" component={VerifyHoursScreen} />
      <Stack.Screen name="AlmostCompleteScreen" component={AlmostCompleteScreen} />
      <Stack.Screen name="CongratulationScreen" component={CongratulationScreen} />
      <Stack.Screen name="ReceiveFundScreen" component={ReceiveFundScreen} />
      <Stack.Screen name="UnlimitedAccess" component={UnlimitedAccess} />
    </Stack.Navigator>
  );
};

export default AppNavigator;