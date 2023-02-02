import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './MainPage.styles';
import {useTranslation} from 'react-i18next';

export const MainPageView = ({
  navigateToMaps,
  handleOnClickLocked,
  isEnabled,
}: any) => {
  const {t} = useTranslation();
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.locker} onPress={handleOnClickLocked}>
          <Icon
            name="lock"
            size={150}
            color={!isEnabled ? '#6ECEE3' : '#FFDEAC'}
          />
        </TouchableOpacity>
        <Text style={styles.locker_state_text}>
          {!isEnabled ? t('unlocked status') : t('locked status')}
        </Text>
        <TouchableOpacity onPress={navigateToMaps} style={styles.map__btn}>
          <Text style={styles.map__btn__text}>{t('open map')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
