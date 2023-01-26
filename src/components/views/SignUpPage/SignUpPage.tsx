import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ISignUpPage} from './SignUpPage.interface';
import {styles} from '../SignInPage/SignInPage.styles';

export const SignUpPageView = ({
  name,
  email,
  password,
  handleOnChangeEmail,
  handleOnChangeName,
  handleOnChangePassword,
  handleOnPressNavigateToSignIn,
  signUpUser,
}: ISignUpPage) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.signInput}
        placeholder="name"
        value={name}
        onChangeText={handleOnChangeName}
      />

      <TextInput
        style={styles.signInput}
        placeholder="email"
        value={email}
        onChangeText={handleOnChangeEmail}
      />

      <TextInput
        style={styles.signInput}
        placeholder="password"
        value={password}
        onChangeText={handleOnChangePassword}
      />

      <TouchableOpacity style={styles.signBtn} onPress={signUpUser}>
        <Text style={styles.signBtnText}>Sign Up</Text>
      </TouchableOpacity>

      <View>
        <Text>Already have an account?</Text>

        <TouchableOpacity>
          <Text onPress={handleOnPressNavigateToSignIn}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
