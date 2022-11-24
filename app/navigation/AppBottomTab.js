/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '@app/themes';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
let isTablet = DeviceInfo.isTablet();

import {
  MAIN_HomeScreen,
  MAIN_SettingScreen,
  MAIN_ComicScreen,
  MAIN_NewsFeedScreen,
  MAIN_LikedScreen,
  MAIN_DownloadedScreen
} from '@app/screen/home';
import AccountStack from './AccountStack';

import { TDButtonNavigation } from '../components';

const PlusScreen = () => {
  return null;
};

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      headerMode={'none'}
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: '#FFF',
        tabBarInactiveBackgroundColor: '#FFF',
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.muted,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
        },
        tabBarStyle: { paddingHorizontal: isTablet ? 100 : 0, backgroundColor: '#FFFFFF' },
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        headerMode={'none'}
        name="NewsfeedScreen"
        component={MAIN_NewsFeedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Bảng tin',
          tabBarIcon: ({ focused, tintColor, size }) => (
            <View>
              <Icon
                name="rss"
                size={isTablet ? 24 : 22}
                color={focused ? Colors.primary : Colors.muted}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ComicScreen"
        component={MAIN_ComicScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Truyện',
          tabBarBadge: null,
          tabBarIcon: ({ focused, tintColor, size }) => (
            <View>
              <Icon
                name="book-open"
                size={isTablet ? 24 : 22}
                color={focused ? Colors.primary : Colors.muted}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="AddScreen"
        component={PlusScreen}
        options={{
          headerShown: false,
          tabBarButton: () => <TDButtonNavigation />,
        }}
      /> */}
      <Tab.Screen
        name="LikedScreen"
        component={MAIN_LikedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Ưa thích',
          tabBarBadge: null,
          tabBarIcon: ({ focused, tintColor, size }) => (
            <View>
              <Icon
                name="heart"
                size={isTablet ? 24 : 22}
                color={focused ? Colors.primary : Colors.muted}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DownloadedScreen"
        component={MAIN_DownloadedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Đã tải',
          tabBarIcon: ({ focused, tintColor, size }) => (
            <Icon
              name="download"
              size={isTablet ? 24 : 22}
              color={focused ? Colors.primary : Colors.muted}
              solid={focused ? true : false}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={MAIN_SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ focused, tintColor, size }) => (
            <Icon
              name="user"
              size={isTablet ? 24 : 22}
              color={focused ? Colors.primary : Colors.muted}
              solid={focused ? true : false}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
