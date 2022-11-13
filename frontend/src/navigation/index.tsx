import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';
import {HomeScreen} from '../screens/HomeScreen';
import {HistoryScreen} from '../screens/HistoryScreen';
import {MainNativeStackNavigatorParamList} from './types';
import {navigationRef} from './navigationUtils';

const MainNativeStack =
  createNativeStackNavigator<MainNativeStackNavigatorParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNativeStack.Navigator initialRouteName={ROUTES.HOME_SCREEN}>
        <MainNativeStack.Screen
          component={HomeScreen}
          name={ROUTES.HOME_SCREEN}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Home',
          }}
        />
        <MainNativeStack.Screen
          component={HistoryScreen}
          name={ROUTES.HISTORY_SCREEN}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'History',
          }}
        />
      </MainNativeStack.Navigator>
    </NavigationContainer>
  );
};
