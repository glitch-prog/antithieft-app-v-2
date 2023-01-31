import {signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';

import {SignInPageView} from '../../views/SignInPage/SignInPage';
import auth from '@react-native-firebase/auth';
import {FirebaseService} from '../../../services/firebase/firebase.service';

const addToHistory = new FirebaseService().addToHistory;

export const SignInPageContainer = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signInUser = () => {
    const navigateToMainPage = () => navigation.navigate('bottomNav');

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('succeed');
        addToHistory(email, 'signed in');
        navigateToMainPage();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
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
