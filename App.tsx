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

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInPageContainer} from './src/components/containers/SignInPage/SignInPage';
import {SignUpPageContainer} from './src/components/containers/SignUpPage/SignUpPage';

import SplashScreen from 'react-native-splash-screen';
import {BottomNavigator} from './src/navigation/BottomNavigator/BottomNavigator';

import SignOutBtn from './src/controls/SignOutBtn/SignOutBtn';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          component={SignInPageContainer}
          options={{
            headerStyle: {
              backgroundColor: '#F3F6F9',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: '900',
              fontSize: 24,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpPageContainer}
          options={{
            headerStyle: {
              backgroundColor: '#F3F6F9',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: '900',
              fontSize: 24,
            },
            headerTitleAlign: 'center',
          }}
        />
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
            headerTitleAlign: 'center',
            headerLeft: () => <SignOutBtn />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
