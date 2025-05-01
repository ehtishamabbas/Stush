import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../css/Success';

interface SuccessContentProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  imageSource: any;
  resendText?: string | React.ReactNode;
  whatsNextText?: string | React.ReactNode;
  whatsNextSubtext?: string | React.ReactNode;
}

const SuccessContent: React.FC<SuccessContentProps> = ({
  title,
  subtitle,
  imageSource,
  resendText,
  whatsNextText,
  whatsNextSubtext
}) => {
  return (
    <View style={styles.contentMainContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
        {subtitle && <Text style={styles.subText}>{subtitle}</Text>}

        <View style={styles.imageContainer}>
          <Image
            source={imageSource}
            style={styles.contentImage}
            accessibilityLabel="Success Image"
          />
        </View>
        
        {resendText && (
          <Text style={styles.resendText}>{resendText}</Text>
        )}

        {(whatsNextText || whatsNextSubtext) && (
          <View style={styles.whatsNextContainer}>
            {whatsNextText && (
              <Text style={styles.whatsNextHeading}>{whatsNextText}</Text>
            )}
            {whatsNextSubtext && (
              <Text style={styles.credentialsText}>{whatsNextSubtext}</Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default SuccessContent;