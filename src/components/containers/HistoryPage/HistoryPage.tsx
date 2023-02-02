import React, {useEffect, useState} from 'react';
import {HistoryPageView} from '../../views/HistoryPage/HistoryPage';
import firestore from '@react-native-firebase/firestore';
import {IItem} from './HistoryPage.interface';
import {DocumentData} from '@firebase/firestore';

export const HistoryPageContainer = () => {
  const [history, setHistory] = useState<IItem[] | DocumentData[]>();

  useEffect(() => {
    const subscriber = firestore()
      .collection('history')
      .onSnapshot(querySnapshot => {
        const currHistory: DocumentData[] = [];
        querySnapshot?.forEach(documentSnapshot => {
          currHistory.push({
            ...documentSnapshot.data(),
          });
          setHistory(currHistory);
        });
      });

    return () => subscriber();
  }, []);
  return <HistoryPageView history={history ? history : []} />;
};
