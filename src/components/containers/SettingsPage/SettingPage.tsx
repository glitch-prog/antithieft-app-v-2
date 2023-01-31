import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SettingPageView} from '../../views/SettingsPage/SettingPage';
import i18next from 'i18next';

export const SettingPageContainer = () => {
  const changeLanguage = (lng: string) =>
    i18next.changeLanguage(lng, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('Welcome to React'); // -> same as i18next.t
    });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');
  const [items, setItems] = useState([
    {label: 'Eng', value: 'en'},
    {label: 'Rus', value: 'ru'},
  ]);

  useEffect(() => {
    changeLanguage(value);
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
