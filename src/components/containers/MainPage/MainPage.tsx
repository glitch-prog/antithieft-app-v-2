import React, {useEffect, useState} from 'react';
import {MainPageView} from '../../views/MainPage/MainPage';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {FirebaseService} from '../../../services/firebase/firebase.service';
import {IMainPage, IUser} from './MainPage.interface';

const addToHistory = new FirebaseService().addToHistory;

export const MainPageContainer = ({navigation}: IMainPage) => {
  const [user, setUser] = useState<IUser>();

  const navigateToMaps = () => {
    const navigateToMapsPage = () => navigation.navigate('Map');
    navigateToMapsPage();
  };

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const getLockerState = async () => {
    firestore()
      .collection('devices')
      .doc('locker')
      .onSnapshot(documentSnapshot => {
        const data = documentSnapshot?.data();
        setIsEnabled(data?.isLocked);
      });
  };

  const updateLockerState = async (isEnabledStatus: boolean) => {
    await firestore().collection('devices').doc('locker').update({
      isLocked: isEnabledStatus,
    });

    if (user?.email) {
      addToHistory(
        user.email,
        isEnabled ? 'Car was locked' : 'Car was unlocked',
      );
    }
  };

  const handleOnClickLocked = () => {
    const status = !isEnabled;
    setIsEnabled(status);
    updateLockerState(status);
  };

  function onAuthStateChanged(authUser: any) {
    setUser(authUser);
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
