import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {PermissionsAndroid, StyleSheet} from 'react-native';
import {DocumentData} from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import {MainPageView} from '../../views/MainPage/MainPage';
import {CoordName} from '../../views/MapPage/MapPage.interface';

export const MapPageContainer = () => {
  const [coord, setCoord] = useState<Record<CoordName, number>>({
    latitude: 53.919838,
    longitude: 27.592643,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const requestGeolocationPermission = useCallback(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation permission',
        message:
          'We need access to your geolocation ' +
          'so you can stay clear about location of your vehicle.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('done');
    } else {
      console.log('Geolocation permission denied');
    }
  }, []);

  useEffect(() => {
    requestGeolocationPermission();
  }, []);

  return <MainPageView coord={coord} />;
};

const styles = StyleSheet.create({
  map: {width: '100%', height: '100%'},
});
