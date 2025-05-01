import React from 'react';
import { Text } from 'react-native';
import BaseSuccessScreen from '../../components/common/BaseSuccessScreen';

interface VerificationSuccessProps {
  navigation: any;
}

const VerificationSuccess: React.FC<VerificationSuccessProps> = ({ navigation }) => {
  return (
    <BaseSuccessScreen
      navigation={navigation}
      onBackPress={() => navigation.goBack()}
      title="SUCCESS!"
      subtitle="Your phone has been verified. Your Slush Pay account is now secure and ready to use."
      imageSource={require('../../../assets/images/wallet-success.png')}
      resendText={
        <>
          <Text style={{ fontWeight: 'bold', color: 'white', textDecorationLine: 'underline'}}>RESEND</Text> Verification if Needed
        </>
      }
      whatsNextText="What's Next?"
      whatsNextSubtext="Create Login Credentials"
      buttonText="Next"
      nextScreen="CreatePasswordScreen"
    />
  );
};

export default VerificationSuccess;
