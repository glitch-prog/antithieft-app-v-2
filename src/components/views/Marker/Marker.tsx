import React from 'react';

import {Marker} from 'react-native-maps';
import {IMarkerView} from './Marker.interface';

export const MarkerView = ({obj}: IMarkerView) => {
  return (
    <Marker
      draggable
      coordinate={{
        latitude: +obj?.data.split(',')[0],
        longitude: +obj?.data.split(',')[1],
      }}
    />
  );
};
