import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ISignInPage} from './SignInPage.interface';
import {styles} from './SignInPage.styles';

export const SignInPageView = ({
  name,
  email,
  password,
  handleOnChangeEmail,
  handleOnChangeName,
  handleOnChangePassword,
  handleOnPressNavigateToSignUp,
  signInUser,
}: ISignInPage) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.signInput}
          placeholder="Name"
          value={name}
          onChangeText={handleOnChangeName}
        />

        <TextInput
          keyboardType="email-address"
          style={styles.signInput}
          placeholder="Email"
          value={email}
          onChangeText={handleOnChangeEmail}
        />

        <TextInput
          // keyboardType="visible-password"
          style={styles.signInput}
          placeholder="Password"
          value={password}
          onChangeText={handleOnChangePassword}
        />
      </View>

      <TouchableOpacity style={styles.signBtn} onPress={signInUser}>
        <Text style={styles.signBtnText}>Sign In</Text>
      </TouchableOpacity>

      <View>
        <Text>Don't have an account?</Text>

        <TouchableOpacity>
          <Text onPress={handleOnPressNavigateToSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
