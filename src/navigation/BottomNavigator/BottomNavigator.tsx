import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MapPageContainer} from '../../components/containers/MapPage/MapPage';
import {MainPageContainer} from '../../components/containers/MainPage/MainPage';
import {HistoryPageContainer} from '../../components/containers/HistoryPage/HistoryPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SettingPageContainer} from '../../components/containers/SettingsPage/SettingPage';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName: string = 'square';

          switch (route.name) {
            case 'Map': {
              iconName = 'map-o';
              break;
            }

            case 'Main': {
              iconName = 'square-o';
              break;
            }

            case 'History': {
              iconName = 'file-text-o';
              break;
            }

            case 'Settings': {
              iconName = 'cog';
              break;
            }
          }

          return (
            <Icon
              name={iconName}
              color={focused ? 'black' : 'gray'}
              size={20}
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Main"
        component={MainPageContainer}
        options={{headerShown: false, title: `${t('main tab')}`}}
      />
      <Tab.Screen
        name="Map"
        component={MapPageContainer}
        options={{headerShown: false, title: `${t('map tab')}`}}
      />
      <Tab.Screen
        name="History"
        component={HistoryPageContainer}
        options={{headerShown: false, title: `${t('history tab')}`}}
      />

      <Tab.Screen
        name="Settings"
        component={SettingPageContainer}
        options={{headerShown: false, title: `${t('settings tab')}`}}
      />
    </Tab.Navigator>
  );
};
