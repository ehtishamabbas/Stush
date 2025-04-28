import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export type BankItem = {
  title: string;
  text?: string;
  iconBg: string;
  image?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  iconText?: string;
  icon?: string;
};
