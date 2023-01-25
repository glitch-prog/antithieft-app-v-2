import React, {useEffect, useState} from 'react';
import {MainPageView} from '../../views/MainPage/MainPage';

import firestore from '@react-native-firebase/firestore';
import {app} from '../../../firebase/firebase-config';

export const MainPageContainer = ({navigation}: any) => {
  const navigateToMaps = () => {
    const navigateToMapsPage = () => navigation.navigate('map');
    navigateToMapsPage();
  };

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const getLockerState = async () => {
    const lockerState = await (
      await firestore().collection('devices').doc('locker').get()
    ).data()?.isLocked;
    console.log(lockerState);
  };

  const updateLockerState = async (isEnabled: boolean) => {
    await firestore()
      .collection('devices')
      .doc('locker')
      .update({
        isLocked: isEnabled,
      })
      .then(() => console.log(!isEnabled ? 'unlocked' : 'locked'));
  };

  const handleOnClickLocked = () => {
    setIsEnabled(!isEnabled);
    updateLockerState(isEnabled);
  };

  useEffect(() => {
    getLockerState();
  });

  return (
    <MainPageView
      navigateToMaps={navigateToMaps}
      handleOnClickLocked={handleOnClickLocked}
      isEnabled={isEnabled}
    />
  );
};