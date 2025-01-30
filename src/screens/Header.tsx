import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Theme from '@themes/Index';
import Images from '@constants/Image';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from '@components/drawer/Index';

const Header = props => {
  return (
    <View style={style.root}>
      <StatusBar
        animated={true}
        backgroundColor={Theme.colors.primary}
        barStyle={'default'}
      />

      {props?.back ? (
        <View className="flex-row items-center" style={{gap: 10}}>
          <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>

          <Text style={style.textMain}>{props?.route?.name}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => props?.setisOpen(p => !p)}>
          <Image style={style.icon} source={Images.menu} />
        </TouchableOpacity>
      )}
      {!props?.back && <Text style={style.textMain}>{props?.route?.name}</Text>}
      <TouchableOpacity>
        <Icon name="bell" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    backgroundColor: Theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 21,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textMain: {
    fontSize: Theme.fontSizes.large,
    color: Theme.colors.light,
    fontWeight: '800',
    fontFamily: 'Segoe UI',
    textTransform: 'uppercase',
  },
});

export default Header;
