import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // width: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInput: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontWeight: '900',
  },

  signBtn: {
    width: 250,
    backgroundColor: 'gray',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 20,
  },
  signBtnText: {
    color: '#fff',
    fontWeight: '900',
  },

  link: {
    color: 'gray',
  },

  link_text: {
    fontWeight: '900',
    marginRight: 5,
  },

  link__container: {
    flexDirection: 'row',
  },
});
