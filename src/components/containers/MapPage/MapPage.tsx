import React, {useCallback, useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {MapPageView} from '../../views/MapPage/MapPage';

export const MapPageContainer = () => {
  const coord = {
    latitude: 53.919838,
    longitude: 27.592643,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const requestGeolocationPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
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
    }
  }, []);

  useEffect(() => {
    requestGeolocationPermission();
  }, [requestGeolocationPermission]);

  return <MapPageView coord={coord} />;
};
