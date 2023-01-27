import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {CoordName} from '../../views/MapPage/MapPage.interface';
import {MapPageView} from '../../views/MapPage/MapPage';

export const MapPageContainer = () => {
  const [coord, setCoord] = useState<Record<CoordName, number>>({
    latitude: 53.919838,
    longitude: 27.592643,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const requestGeolocationPermission = useCallback(async () => {
    if (Platform.OS == 'android') {
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
    } else {
    }
  }, []);

  useEffect(() => {
    requestGeolocationPermission();
  }, []);

  return <MapPageView coord={coord} />;
};
