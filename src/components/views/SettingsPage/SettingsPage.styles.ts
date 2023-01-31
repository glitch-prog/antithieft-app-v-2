import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingOption: {
    flexDirection: 'row',
    width: 300,
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },

  settingOptionTitle: {
    fontSize: 20,
    fontWeight: '900',
  },

  dropDown: {
    width: 80,
  },
});
