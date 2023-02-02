import React, {useEffect, useMemo, useState} from 'react';
import {SettingPageView} from '../../views/SettingsPage/SettingPage';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingPageContainer = () => {
  const data = useMemo(async () => {
    const value = await AsyncStorage.getItem('@lng');
    console.log(value);
    if (value !== null) {
      setValue(value);
    }

    return value;
  }, []);

  const changeLanguage = (value: string) => {
    i18next.changeLanguage(value, (_, t) => {
      t('Welcome to React');
    });

    const storeData = async (lng: string) => {
      await AsyncStorage.setItem('@lng', lng);
    };

    storeData(value);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | Promise<string | null>>(
    'en' && data,
  );
  const [items, setItems] = useState([
    {label: 'Eng', value: 'en'},
    {label: 'Rus', value: 'ru'},
  ]);

  useEffect(() => {
    changeLanguage(`${value}`);
  }, [value]);

  return (
    <SettingPageView
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};
