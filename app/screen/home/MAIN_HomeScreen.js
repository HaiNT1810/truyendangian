import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {Appbar} from 'react-native-paper';
import { Colors } from '@app/themes';

const MAIN_HomeScreen = () => {
  return (
    <View>
      <Appbar.Header
      style={styles.header}
      >
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={'dots-horizontal'} onPress={() => {}} />
      </Appbar.Header>
      <Text>123123</Text>
    </View>
  );
};

export default MAIN_HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary
  }
})