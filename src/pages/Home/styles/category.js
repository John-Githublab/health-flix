import Theme from '@themes/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    gap: 8,
    flexDirection: 'row',
  },
  categoryRoot: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    
  },
  category: {
    color: Theme.colors.dark,
    fontWeight: 700,
    fontSize: Theme.fontSizes.large,
  },
  timer: {
    color: Theme.colors.shade,
    fontSize: Theme.fontSizes.small,
    fontWeight: 400,
  },
});
