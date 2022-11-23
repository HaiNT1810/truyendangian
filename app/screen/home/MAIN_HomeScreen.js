import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '@app/redux/global/Actions';

const MAIN_HomeScreen = () => {
  const dispatch = useDispatch();
  const isLoadedIntro = useSelector((state) => state.global.favoriteBaseType)
  useEffect(() => {
    console.log(isLoadedIntro);
  }, []);
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        <Appbar.Action icon={'dots-horizontal'} onPress={() => { }} />
      </Appbar.Header>
      <Text>123123</Text>
      <TouchableOpacity onPress={() => { console.log("1"); dispatch(actions.setLoadIntro(false)); }}><Text>Touch</Text></TouchableOpacity>
    </View>
  );
};

export default MAIN_HomeScreen;
