import React, {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import {DocumentData} from 'firebase/firestore';
import {MarkerView} from '../../views/Marker/Marker';

export const MarkerContainer = () => {
  const [obj, setObj] = useState<
    Record<'data', string> | DocumentData | undefined
  >({
    data: '53.919388,27.593148',
  });

  const getNewData = async () => {
    firestore()
      .collection('newCollection')
      .doc('location')
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot) {
          setObj(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getNewData();
  }, [obj?.data]);

  return <MarkerView obj={obj} />;
};
