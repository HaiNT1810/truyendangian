import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';
import { Story_filterScreen } from '@app/screen/story';
import { MAIN_ComicHotScreen } from '@app/screen/home';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} />
      <Stack.Screen name="Story_filterScreen" component={Story_filterScreen} />
      <Stack.Screen name="MAIN_ComicHotScreen" component={MAIN_ComicHotScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
