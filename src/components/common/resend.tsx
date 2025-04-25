import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface ResendTimerProps {
  initialSeconds: number;
  onResend: () => void;
}

const ResendTimer: React.FC<ResendTimerProps> = ({ initialSeconds, onResend }) => {
 
  return (
    <TouchableOpacity 
      style={styles.resendButton} 
      
    >
      <Text style={styles.resendText}>
         Resend in 
      </Text>
    </TouchableOpacity>
  );
};

export default ResendTimer;