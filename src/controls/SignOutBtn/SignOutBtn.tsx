import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert} from 'react-native';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const SignOutBtn = () => {
  const {t, i18n} = useTranslation();
  const navigation =
    useNavigation<NavigationProp<ReactNavigation.RootParamList>>();
  const signOut = () => {
    Alert.alert(`${t('sign out')}`, `${t('sign out msg')}`, [
      {
        text: `${t('cancel msg')}`,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: `${t('y msg')}`,
        onPress: () => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
          navigation.navigate('Sign In');
        },
      },
    ]);
  };
  return (
    <TouchableOpacity
      onPress={signOut}
      style={{marginLeft: 5, marginBottom: 5}}>
      <Text style={{fontSize: 15, color: 'red', fontWeight: '900'}}>
        {t('sign out')}
      </Text>
    </TouchableOpacity>
  );
};

export default SignOutBtn;
