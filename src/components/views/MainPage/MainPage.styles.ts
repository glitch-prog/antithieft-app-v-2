import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F6F9',
  },
  container: {
    width: 320,
    height: 500,
    // height:,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  map__btn: {
    display: 'flex',
    width: 150,
    height: 75,
    backgroundColor: '#007DFC',
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  map__btn__text: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 18,
  },

  locker: {
    marginTop: 150,
  },

  locker_state_text: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 26,
    color: '#000',
    marginBottom: 60,
  },
});
