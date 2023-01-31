/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import './src/services/firebase/i18n/i18n';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {MainPageContainer} from './src/components/containers/MainPage/MainPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MapPageView} from './src/components/views/MapPage/MapPage';
import {SignInPageContainer} from './src/components/containers/SignInPage/SignInPage';
import {SignUpPageContainer} from './src/components/containers/SignUpPage/SignUpPage';
import {MapPageContainer} from './src/components/containers/MapPage/MapPage';
import SplashScreen from 'react-native-splash-screen';
import {BottomNavigator} from './src/navigation/BottomNavigator/BottomNavigator';
import {Button} from 'react-native';
import SignOutBtn from './src/controls/SignOutBtn/SignOutBtn';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log('componentDidMount');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignInPageContainer} />
        <Stack.Screen name="Sign Up" component={SignUpPageContainer} />
        <Stack.Screen
          name="bottomNav"
          component={BottomNavigator}
          options={{
            headerTitle: 'AntitheftApp',
            headerStyle: {
              backgroundColor: '#F3F6F9',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: '900',
              fontSize: 24,
            },
            headerLeft: () => <SignOutBtn />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
