import Images from '@constants/Image';
import Theme from '@themes/Index';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = (props: any) => {
  return (
    <View style={style.root}>
      <StatusBar
        animated={true}
        backgroundColor={Theme.colors.primary}
        barStyle={'default'}
      />

      {props?.back ? (
        <View style={{gap: 10}}>
          <TouchableOpacity onPress={props?.navigation?.goBack}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={style.textMain}>{props?.title}</Text>
        </View>
      ) : (
        <Text style={style.textMain}>{props?.title}</Text>
      )}
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
    paddingVertical: 16,
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
