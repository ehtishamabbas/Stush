import React from 'react';
import BaseSuccessScreen from '../../components/common/BaseSuccessScreen';


interface AccountSuccessProps {
  navigation: any;
}

const AccountSuccess: React.FC<AccountSuccessProps> = ({ navigation }) => {
  return (
    <BaseSuccessScreen
      navigation={navigation}
      title="SUCCESS!"
      subtitlel="Your account has been created"
      imageSource={require('../../../assets/images/Crypto.png')}
      buttonText="Next"
      nextScreen="BonusScreen"



    />
  );
};

export default AccountSuccess;