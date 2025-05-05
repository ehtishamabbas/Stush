import React from 'react';
import BaseSuccessScreen from '../../components/common/BaseSuccessScreen';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

interface AccountSuccessProps {
  navigation?: NavigationProp<RootStackParamList>;
}

const AccountSuccess: React.FC<AccountSuccessProps> = ({ navigation }) => {
  return (
<BaseSuccessScreen
      navigation={navigation}
      title="SUCCESS!"
      subtitle="Your account has been created"
      imageSource={require('../../../assets/images/Crypto.png')} 
       buttonText="Next"
      nextScreen="BonusScreen"  
    />
  );
};

export default AccountSuccess;