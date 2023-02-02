import React, {useEffect, useState} from 'react';
import {HistoryPageView} from '../../views/HistoryPage/HistoryPage';
import firestore from '@react-native-firebase/firestore';

export const HistoryPageContainer = () => {
  const [history, setHistory] = useState<any[]>();

  useEffect(() => {
    const subscriber = firestore()
      .collection('history')
      .onSnapshot(querySnapshot => {
        const currHistory: any[] = [];
        querySnapshot?.forEach(documentSnapshot => {
          currHistory.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
          setHistory(currHistory);
        });
      });

    return () => subscriber();
  }, []);
  return <HistoryPageView history={history} />;
};
