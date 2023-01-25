import React, {useEffect, useState} from 'react';

import {Marker} from 'react-native-maps';

import firestore from '@react-native-firebase/firestore';
import {DocumentData} from 'firebase/firestore';
import {MarkerView} from '../../views/Marker/Marker';

export const MarkerContainer = () => {
  const [obj, setObj] = useState<
    Record<'data', string> | DocumentData | undefined
  >({
    // data: '53.919193,27.593078',
    data: '53.919388,27.593148',
  });

  const getNewData = async () => {
    await firestore()
      .collection('newCollection')
      .doc('location')
      .onSnapshot(documentSnapshot => {
        setObj(documentSnapshot.data());
        console.log('User data: ', documentSnapshot.data());
        console.log('object data', obj?.data.split(','));
      });
  };

  useEffect(() => {
    getNewData();
  });

  return <MarkerView obj={obj} />;
};
