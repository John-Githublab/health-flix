import {StyleSheet, Text, View} from 'react-native';

interface Named {
  title: string;
  bgColor?: string;
  color?: string;
}

export default NamedAvatar = ({title}: Named) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 38,
    height: 38,
    backgroundColor: '#C347C6',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    color: 'white',
  },
});
