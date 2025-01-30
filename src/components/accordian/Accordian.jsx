import React, {useState} from 'react';
import AccordianBody from './AccordianBody';
import AccordianHeader from './AccordianHeader';
import {StyleSheet, View} from 'react-native';

export const AccordianState = React.createContext();
const Accordian = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSwitch = () => {
    setIsOpen(open => !open);
  };

  return (
    <AccordianState.Provider value={{isOpen, setIsOpen, onSwitch}}>
      <View style={styles.root}>{children}</View>
    </AccordianState.Provider>
  );
};

Accordian.Header = AccordianHeader;
Accordian.Content = AccordianBody;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000', // Use black for shadow
    shadowOffset: {width: 0, height: 8}, // Matches `0px 8px`
    shadowOpacity: 0.08, // 14% opacity converted to decimal (0.14 → 0.08 for a subtle effect)
    shadowRadius: 18, // Matches `18px` blur radius
    elevation: 10,
    padding: 12,
    borderRadius: 10,
  },
});

export default Accordian;
