import React, {ReactNode} from 'react';
import {View, Text, TextStyle} from 'react-native';
import Theme from '@themes/Index';

type VariantStyles = {
  heading: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  content: TextStyle;
};

type TypographyProps = {
  variant?: keyof VariantStyles;
  children: ReactNode;
  style?: React.CSSProperties;
  numberOfLines?: number;
  textClassName?: string;
};

const variants: VariantStyles = {
  heading: {
    fontSize: Theme.fontSizes.xLarge,
    fontWeight: 'bold',
    color: Theme.colors.dark,
    fontFamily: Theme.fontFamily.segioUi,
    textTransform: 'capitalize',
    lineHeight: 18,
  },
  title: {
    fontSize: Theme.fontSizes.large,
    fontWeight: 'bold',
    color: Theme.colors.dark,
    fontFamily: Theme.fontFamily.segioUi,
    textTransform: 'capitalize',
    lineHeight: 18,
  },
  subtitle: {
    fontSize: Theme.fontSizes.medium,
    fontWeight: 'bold',
    color: Theme.colors.dark,
    fontFamily: Theme.fontFamily.segioUi,
    textTransform: 'capitalize',
    lineHeight: 21,
  },
  content: {
    fontSize: Theme.fontSizes.small,
    fontWeight: 'normal',
    color: Theme.colors.dark,
    fontFamily: Theme.fontFamily.segioUi,
    textTransform: 'capitalize',
    lineHeight: 18,
  },
};

const Typography: React.FC<TypographyProps> = props => {
  const {variant, children, numberOfLines} = props;

  const mergedStyles: TextStyle = [
    {...variants[variant || 'content']},
    {...props?.style},
  ];

  return (
    <Text {...props} numberOfLines={numberOfLines} style={mergedStyles}>
      {children}
    </Text>
  );
};

export default Typography;
