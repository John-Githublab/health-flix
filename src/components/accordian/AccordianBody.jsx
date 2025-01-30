import React from 'react';
import {AccordianState} from './Accordian';
import {StyleSheet, Text, View} from 'react-native';

const AccordianBody = ({children}) => {
  const {isOpen, onSwitch} = React.useContext(AccordianState);

  return <View style={isOpen ? styles.root : styles.hidden}>{children}</View>;
};

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export default AccordianBody;
