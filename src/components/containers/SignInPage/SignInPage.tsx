import React, {useEffect, useState} from 'react';

import {SignInPageView} from '../../views/SignInPage/SignInPage';
import auth from '@react-native-firebase/auth';
import {FirebaseService} from '../../../services/firebase/firebase.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

const addToHistory = new FirebaseService().addToHistory;

export const SignInPageContainer = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const getData = async () => {
    const value = await AsyncStorage.getItem('@lng');
    console.log(value);
    if (value !== null) {
      i18next.changeLanguage(value, (err, t) => {
        if (err) {
          return console.log('something went wrong loading', err);
        }
        t('Welcome to React');
      });
    }
  };

  const signInUser = () => {
    const navigateToMainPage = () => navigation.navigate('bottomNav');

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        addToHistory(email, 'signed in');
        navigateToMainPage();
      });
  };

  const handleOnChangeName = (text: React.SetStateAction<string>) =>
    setName(text);

  const handleOnChangeEmail = (text: React.SetStateAction<string>) =>
    setEmail(text);

  const handleOnChangePassword = (text: React.SetStateAction<string>) =>
    setPassword(text);

  const handleOnPressNavigateToSignUp = () => {
    navigation.navigate('Sign Up');
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <SignInPageView
      name={name}
      email={email}
      password={password}
      signInUser={signInUser}
      handleOnChangeName={handleOnChangeName}
      handleOnChangeEmail={handleOnChangeEmail}
      handleOnChangePassword={handleOnChangePassword}
      handleOnPressNavigateToSignUp={handleOnPressNavigateToSignUp}
    />
  );
};
