import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import clsx from 'clsx';
import Typography from '@components/Typography/Index';

const TextField = ({
  placeholder,
  startIcon,
  label,
  labelColor,
  labelBgColor,
}) => {
  return (
    <View className="  rounded-xl    w-[100%] pt-3   relative">
      <View
        style={{gap: 6, backgroundColor: labelBgColor}}
        className={clsx(
          'pr-[18] pl-[10]  py-[6] absolute rounded-[12px] left-[20] flex-row items-center z-10',
        )}>
        {startIcon}
        <Typography
          variant="subtitle"
          style={{fontWeight: 'normal', color: labelColor}}>
          {label}
        </Typography>
      </View>
      <TextInput
        className="pb-2 pt-5 px-2"
        placeholder={placeholder}
        style={[style.root]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1.18,
    shadowRadius: 10.59,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default TextField;
