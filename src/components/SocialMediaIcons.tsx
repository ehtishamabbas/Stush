import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SocialIcons = () => {
   const handleSocialLogin = (platform: string) => {
    console.log(`Login with ${platform}`);
   };

   const socialIcons = [
    {name: 'twitter', color: 'rgba(3, 169, 244, 1)', iconName: 'twitter'},
    {name: 'facebook', color: 'rgba(66, 103, 178, 1)', iconName: 'facebook'},
    {name: 'google', color: '#EA4335', iconName: 'google'},
    {name: 'tiktok', color: '#EE1D52', iconName: 'tiktok'},
    {name: 'instagram', color: '#FF69B4', iconName: 'instagram'},
  ];

  return (
    <View style={styles.socialIconsContainer}>
      {socialIcons.map(icon => (
        <TouchableOpacity
          key={icon.name}
          style={styles.iconButton}
          onPress={() => handleSocialLogin(icon.name)}>
          <FontAwesome5
            name={icon.iconName}
            size={22}
            color={icon.color}
            brand
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    paddingHorizontal: 10,
    color: '#718096',
    fontSize: 14,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 1)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
});

export default SocialIcons;
