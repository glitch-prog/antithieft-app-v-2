import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  historyList: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },

  historyListItem: {
    width: 300,
    padding: 10,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  historyListItemTitle: {
    fontSize: 15,
    fontWeight: '900',
  },
});
