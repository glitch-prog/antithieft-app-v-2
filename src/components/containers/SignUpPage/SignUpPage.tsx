import React, {useState} from 'react';
import {SignUpPageView} from '../../views/SignUpPage/SignUpPage';
import auth from '@react-native-firebase/auth';
import {FirebaseService} from '../../../services/firebase/firebase.service';

const addToHistory = new FirebaseService().addToHistory;

export const SignUpPageContainer = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signUpUser = async () => {
    const navigateToMainPage = () => navigation.navigate('bottomNav');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        addToHistory(email, 'signed up');
        navigateToMainPage();
      });
  };

  const handleOnChangeName = (text: React.SetStateAction<string>) =>
    setName(text);

  const handleOnChangeEmail = (text: React.SetStateAction<string>) =>
    setEmail(text);

  const handleOnChangePassword = (text: React.SetStateAction<string>) =>
    setPassword(text);

  const handleOnPressNavigateToSignIn = () => {
    navigation.navigate('Sign In');
  };

  return (
    <SignUpPageView
      name={name}
      email={email}
      password={password}
      signUpUser={signUpUser}
      handleOnChangeName={handleOnChangeName}
      handleOnChangeEmail={handleOnChangeEmail}
      handleOnChangePassword={handleOnChangePassword}
      handleOnPressNavigateToSignIn={handleOnPressNavigateToSignIn}
    />
  );
};
