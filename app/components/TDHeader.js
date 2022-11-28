/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import { Colors, Fonts, Images } from '@app/themes';

const TDHeader = ({ leftComponentOnPress, title }) => {
  return (
    <Header
      statusBarProps={{ barStyle: 'dark-content', backgroundColor: 'transparent', translucent: true }}
      barStyle="dark-content"
      placement="left"
      leftComponent={
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Image source={Images.logos}></Image>
        </View>
      }
      centerComponent={{
        text: title,
        style: { color: '#2E2E2E', ...Fonts.style.extralarge_bold },
      }}
      rightComponent={
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => { console.log(1) }}>
            <FontAwesome name={'search'} size={18} color={'#2E2E2E'} />
          </TouchableOpacity>
        </View>
      }
      containerStyle={{
        backgroundColor: Colors.background,
        borderBottomWidth: 0,
        justifyContent: 'space-around',
      }}
      centerContainerStyle={{ justifyContent: 'center' }}
    />
  );
};

export default TDHeader;

const styles = StyleSheet.create({});
