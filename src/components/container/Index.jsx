import {View} from 'react-native';

const Container = props => {
  const {children, styles} = props;
  return (
    <View
      style={{
        paddingHorizontal: 16,
        flex: 1,
        ...styles,
        backgroundColor: '#F5F9FE',
      }}
      {...props}>
      {children}
    </View>
  );
};

export default Container;
