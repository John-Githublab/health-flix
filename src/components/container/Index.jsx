import { View } from 'react-native';

const Container = props => {
  const {children, styles} = props;
  return (
    <View style={{marginHorizontal: 16, flex: 1, ...styles}} {...props}>
      {children}
    </View>
  );
};

export default Container;
