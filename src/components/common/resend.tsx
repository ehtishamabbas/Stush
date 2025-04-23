import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface ResendTimerProps {
  initialSeconds: number;
  onResend: () => void;
}

const ResendTimer: React.FC<ResendTimerProps> = ({ initialSeconds, onResend }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      if (interval) clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const handleResend = () => {
    onResend();
    setSeconds(initialSeconds);
    setIsActive(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <TouchableOpacity 
      style={styles.resendButton} 
      onPress={handleResend}
      disabled={isActive}
    >
      <Text style={styles.resendText}>
        {isActive ? `Resend in ${formatTime(seconds)}` : 'Resend Code'}
      </Text>
    </TouchableOpacity>
  );
};

export default ResendTimer;