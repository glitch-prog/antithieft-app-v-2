import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ISignUpPage} from './SignUpPage.interface';
import {styles} from '../SignInPage/SignInPage.styles';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.signInput}
        placeholder={`${t('name field')}`}
        value={name}
        onChangeText={handleOnChangeName}
      />

      <TextInput
        style={styles.signInput}
        placeholder={`${t('email field')}`}
        value={email}
        onChangeText={handleOnChangeEmail}
      />

      <TextInput
        style={styles.signInput}
        placeholder={`${t('password field')}`}
        value={password}
        onChangeText={handleOnChangePassword}
      />

      <TouchableOpacity style={styles.signBtn} onPress={signUpUser}>
        <Text style={styles.signBtnText}>{t('sign up')}</Text>
      </TouchableOpacity>

      <View style={styles.link__container}>
        <Text style={[styles.link_text]}>{t('yes acc')}</Text>

        <TouchableOpacity>
          <Text
            style={[styles.link, styles.link_text]}
            onPress={handleOnPressNavigateToSignIn}>
            {t('sign in')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
