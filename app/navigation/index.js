/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();

import AppStack from './AppStack';
import { IntroScreen } from '@app/screen/intro';
import { Host } from 'react-native-portalize';
import { stat } from 'react-native-fs';

const RootContainerScreen = () => {
  const dispatch = useDispatch();
  const isLoadedIntro = useSelector((state) => state.global.isLoadedIntro)
  useEffect(() => {

    return () => { };
  }, [dispatch]);
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoadedIntro ?
            <Stack.Screen
              name="AppStack"
              component={AppStack}
              options={{
                animationEnabled: false,
              }}
            /> : <Stack.Screen
              name="IntroScreen"
              component={IntroScreen}
              options={{
                animationEnabled: false,
              }}
            />}
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default RootContainerScreen;

const styles = StyleSheet.create({});
