import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

interface ISettingsBtn {
  text: string;
  onPress: () => void;
}

const SettingsBtn = ({text, onPress}: ISettingsBtn) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export {SettingsBtn};
