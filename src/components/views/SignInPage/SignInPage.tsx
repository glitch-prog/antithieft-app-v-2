import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ISignInPage} from './SignInPage.interface';
import {styles} from './SignInPage.styles';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.signInput}
          placeholder={`${t('name field')}`}
          value={name}
          onChangeText={handleOnChangeName}
        />

        <TextInput
          keyboardType="email-address"
          style={styles.signInput}
          placeholder={`${t('email field')}`}
          value={email}
          onChangeText={handleOnChangeEmail}
        />

        <TextInput
          // keyboardType="visible-password"
          style={styles.signInput}
          placeholder={`${t('password field')}`}
          value={password}
          onChangeText={handleOnChangePassword}
        />
      </View>

      <TouchableOpacity style={styles.signBtn} onPress={signInUser}>
        <Text style={styles.signBtnText}>{t('sign in')}</Text>
      </TouchableOpacity>

      <View style={styles.link__container}>
        <Text style={[styles.link_text]}>{t('no acc')}</Text>

        <TouchableOpacity onPress={handleOnPressNavigateToSignUp}>
          <Text style={[styles.link, styles.link_text]}>{t('sign up')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
