import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HistoryPageView} from '../../views/HistoryPage/HistoryPage';
import firestore from '@react-native-firebase/firestore';
import {DocumentData, DocumentSnapshot} from 'firebase/firestore';

export const HistoryPageContainer = () => {
  const [usersCollection, setUsersCollection] = useState<DocumentData>();
  const [history, setHistory] = useState<any[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('history')
      .onSnapshot(querySnapshot => {
        const currHistory: any[] = [];
        console.log(querySnapshot);
        querySnapshot.forEach(documentSnapshot => {
          console.log(documentSnapshot.data());
          currHistory.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
          console.log('24 - ' + currHistory);
          setHistory(currHistory);
          console.log('26 - ' + history);
        });
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  return <HistoryPageView history={history} />;
};
