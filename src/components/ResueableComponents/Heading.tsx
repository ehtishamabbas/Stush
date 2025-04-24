import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HeadingProps {
  primaryText?: string;
  secondaryText?: string;
  type?: 'primary' | 'secondary' | 'both';
  customStyle?: object;
  customPrimaryStyle?: object;
  customSecondaryStyle?: object;
  alignment?: 'left' | 'center';
}

const Heading: React.FC<HeadingProps> = ({
  primaryText = '',
  secondaryText = '',
  type = 'both',
  customStyle = {},
  customPrimaryStyle = {},
  customSecondaryStyle = {},
  alignment = 'left',
}) => {
  const containerStyle = [
    styles.container, 
    customStyle,
    alignment === 'center' ? styles.centerAlign : {}
  ];

  return (
    <View style={containerStyle}>
      {(type === 'primary' || type === 'both') && primaryText && (
        <Text style={[styles.primaryText, customPrimaryStyle]}>
          {primaryText}
        </Text>
      )}
      
      {(type === 'secondary' || type === 'both') && secondaryText && (
        <>
          <Text style={[styles.secondaryText, customSecondaryStyle]}>
            {secondaryText}
          </Text>
          <View style={styles.underline} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  centerAlign: {
    alignItems: 'center',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  secondaryText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  underline: {
    height: 2,
    backgroundColor: '#1F7FFE',
    width: '100%',
    marginBottom: 10,
  },
});

export default Heading;