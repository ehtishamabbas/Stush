import React from 'react';
import BaseSuccessScreen from '../../components/common/BaseSuccessScreen';

interface VerificationSuccessProps {
  navigation: any;
}

const VerificationSuccess: React.FC<VerificationSuccessProps> = ({ navigation }) => {
  return (
    <BaseSuccessScreen
      navigation={navigation}
      title="SUCCESS!"
      subtitle="Your phone has been verified. Your Slush Pay account is now secure and ready to use."
      imageSource={require('../../../assets/images/wallet.png')} 
      resendText="Resend Verification if Needed"
      whatsNextText="What's Next?"
      whatsNextSubtext="Create Login Credentials"
      buttonText="Next"
      nextScreen="Credentials"  
    />
  );
};

export default VerificationSuccess;