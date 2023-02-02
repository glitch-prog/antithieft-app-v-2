import {View, Text} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './SettingsPage.styles';
import {useTranslation} from 'react-i18next';

export const SettingPageView = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
}: any) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.settingOption}>
        <Text style={styles.settingOptionTitle}>{t('change lng')}</Text>
        <DropDownPicker
          style={styles.dropDown}
          containerStyle={styles.dropDown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
};
