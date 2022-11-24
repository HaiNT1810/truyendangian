import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Colors, Fonts, Images } from '@app/themes';
import { TDTextInputAccount } from '@app/components';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import * as actions from '@app/redux/global/Actions';
import { Header,TDHeader } from '@app/components'
let isTablet = DeviceInfo.isTablet();

const MAIN_LikedScreen = (props) => {
  const { } = props;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TDHeader title={"Ưa thích"}></TDHeader>
    </View>
  );
};

export default MAIN_LikedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})