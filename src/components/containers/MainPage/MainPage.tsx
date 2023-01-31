import React, {useEffect, useMemo, useState} from 'react';
import {MainPageView} from '../../views/MainPage/MainPage';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {FirebaseService} from '../../../services/firebase/firebase.service';
import {EmailAuthCredential} from 'firebase/auth';
import {useTranslation} from 'react-i18next';

const addToHistory = new FirebaseService().addToHistory;

export const MainPageContainer = ({navigation}: any) => {
  const [user, setUser] = useState<any>();
  const [status, setStatus] = useState<boolean>();

  const navigateToMaps = () => {
    const navigateToMapsPage = () => navigation.navigate('Map');
    navigateToMapsPage();
  };

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  // const getLockerState = async () => {
  //   const lockerState = await (
  //     await firestore().collection('devices').doc('locker').get()
  //   ).data()?.isLocked;
  //   console.log(lockerState);
  // };

  const getLockerState = async () => {
    firestore()
      .collection('devices')
      .doc('locker')
      .onSnapshot(documentSnapshot => {
        console.log(documentSnapshot.data());
        const data = documentSnapshot.data();
        setIsEnabled(data?.isLocked);
      });
  };

  const updateLockerState = async (isEnabled: boolean) => {
    await firestore()
      .collection('devices')
      .doc('locker')
      .update({
        isLocked: isEnabled,
      })
      .then(() => console.log(!isEnabled ? 'unlocked' : 'locked'));

    addToHistory(
      user?.email,
      isEnabled ? 'Car was locked' : 'Car was unlocked',
    );

    // await firestore()
    //   .collection('history')
    //   .add({
    //     user: user?.email,
    //     action: isEnabled ? 'Car was locked' : 'Car was unlocked',
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });
  };

  const handleOnClickLocked = () => {
    const status = !isEnabled;
    setIsEnabled(status);
    updateLockerState(status);
  };

  function onAuthStateChanged(user: any) {
    setUser(user);
    console.log(user);
  }

  useEffect(() => {
    getLockerState();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <MainPageView
      navigateToMaps={navigateToMaps}
      handleOnClickLocked={handleOnClickLocked}
      isEnabled={isEnabled}
    />
  );
};
