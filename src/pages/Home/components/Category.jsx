import {Text, View} from 'react-native';
import NamedAvatar from '@components/Avatar/NamedAvatar.tsx';
import {styles} from '../styles/category';

const Category = ({user, category, totalTimer}) => {
  return (
    <View style={styles.root}>
      <NamedAvatar title={user} />
      <View style={styles.categoryRoot}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.timer}>Timers : {totalTimer}</Text>
      </View>
    </View>
  );
};

export default Category;
