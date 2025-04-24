import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface BulletItem {
  text: string;
  title?: string;
  isBlueTitle?: boolean;
}

interface BulletPointsProps {
  items: BulletItem[];
  customStyle?: object;
}

const BulletPoints: React.FC<BulletPointsProps> = ({
  items,
  customStyle = {},
}) => {
  return (
    <View style={[styles.bulletContainer, customStyle]}>
      {items.map((item, index) => (
        <View key={index} style={styles.bulletRow}>
          <FontAwesome5 name="check-circle" size={18} color="#fff" />
          <View style={styles.textContainer}>
            {item.title && (
              <Text style={item.isBlueTitle ? styles.bulletTextBlue : styles.bulletText}>
                {item.title}
              </Text>
            )}
            <Text style={styles.bulletText}>
              {item.text}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bulletContainer: {
    marginTop: 20,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 15,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  bulletText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  bulletTextBlue: {
    color: '#1F7FFE',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default BulletPoints;