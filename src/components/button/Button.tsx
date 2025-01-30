import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Button {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = (props: Button) => {
  const {children, onClick, style} = props;
  return (
    <TouchableOpacity style={{...styles.root}} onPress={onClick}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#32BF05',
    borderStyle: 'solid',
    paddingHorizontal: 15,
    paddingVertical: 5,
    flex: 1,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default Button;
