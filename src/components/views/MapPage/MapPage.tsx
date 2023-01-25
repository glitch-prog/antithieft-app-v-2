import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

import {MarkerView} from '../Marker/Marker';
import {IMapPageView} from './MapPage.interface';
import {styles} from './MapPage.styles';
import {MarkerContainer} from '../../containers/Marker/Marker';

export const MapPageView = ({coord}: IMapPageView) => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={coord}
        region={coord}
        showsUserLocation={true}>
        <MarkerContainer />
      </MapView>
    </View>
  );
};
