import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ContentTextProps {
  children?: React.ReactNode;
  text?: string;
  customStyle?: object;
}

const ContentText: React.FC<ContentTextProps> = ({
  text,
  children,
  customStyle = {},
}) => {
  return (
    <Text style={[styles.text, customStyle]}>
      {text || children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    opacity: 0.8,
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
  },
});

export default ContentText;