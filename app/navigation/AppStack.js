import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import { ListLoaiDichVuScreen } from '@app/screen/loaidichvu';
import { Story_filterScreen, Story_detailScreen } from '@app/screen/story';
import { MAIN_ComicHotScreen } from '@app/screen/home';
import { Comic_ListDetailScreen } from '@app/screen/home/comic';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} />
      <Stack.Screen name="MAIN_ComicHotScreen" component={MAIN_ComicHotScreen} />

      <Stack.Screen name="Story_detailScreen" component={Story_detailScreen} />
      <Stack.Screen name="Story_filterScreen" component={Story_filterScreen} />
      <Stack.Screen name="Comic_ListDetailScreen" component={Comic_ListDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
