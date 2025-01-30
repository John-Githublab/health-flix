import Theme from '@themes/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
    backgroundColor: '#fff', // Ensure a background color
    borderRadius: 8, // Optional for rounded corners
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 8}, // Matches `0px 8px`
    shadowOpacity: 0.08, // 14% opacity converted to decimal (0.14 → 0.08 for better visibility)
    shadowRadius: 18, // Matches `18px` blur radius
    elevation: 16,
    marginTop: 12,
  },
  root: {
    display: 'flex',
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 12,
  },
  wrapper: {display: 'flex', gap: 8, flexDirection: 'row'},
  clockIconWrapper: {
    width: 38,
    height: 38,
    backgroundColor: '#FAFAFB',
    borderRadius: 100,
    padding: 7,
  },
  clockIcon: {
    width: 24,
    height: 24,
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
  statusRoot: {
    backgroundColor: '#EFEFEF',
    borderRadius: 30,
    height: 36,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  statusText: {
    fontWeight: 500,
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.dark,
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 31,
    padding: 12,
  },
  buttonImg: {
    width: 16,
    height: 16,
  },
});
