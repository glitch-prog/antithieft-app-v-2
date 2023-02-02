import {Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {style} from './SignOutBtn.style';
import {FirebaseService} from '../../services/firebase/firebase.service';

const addToHistory = new FirebaseService().addToHistory;

const SignOutBtn = () => {
  const {t} = useTranslation();
  const [user, setUser] = useState<any>();

  const navigation =
    useNavigation<NavigationProp<ReactNavigation.RootParamList>>();

  function onAuthStateChanged(authUser: any) {
    setUser(authUser);
  }

  const signOut = () => {
    auth().onAuthStateChanged(onAuthStateChanged);
    Alert.alert(`${t('sign out')}`, `${t('sign out msg')}`, [
      {
        text: `${t('cancel msg')}`,
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {
        text: `${t('y msg')}`,
        onPress: () => {
          auth().signOut();
          addToHistory(user?.email, 'sign out');
          navigation.navigate('Sign In');
        },
      },
    ]);
  };
  return (
    <TouchableOpacity onPress={signOut} style={style.signOutBtn}>
      <Text style={style.signOutBtnText}>{t('sign out')}</Text>
    </TouchableOpacity>
  );
};

export default SignOutBtn;
