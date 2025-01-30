import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AccordianState} from './Accordian';
import Images from '@constants/Image';

const AccordianHeader = ({children}) => {
  const {open, onSwitch} = React.useContext(AccordianState);

  return (
    <TouchableOpacity onPress={onSwitch} style={styles.root}>
      {children}
      <Image style={styles.icon} source={Images.chevronDown} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default AccordianHeader;
