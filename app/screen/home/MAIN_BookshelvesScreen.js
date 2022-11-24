import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Colors, Fonts, Images } from '@app/themes';
import { TDTextInputAccount } from '@app/components';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
let isTablet = DeviceInfo.isTablet();

const MAIN_BookshelvesScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <SafeAreaView>
        <View style={styles.upperHeaderPlacehoder}></View>
      </SafeAreaView>
      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Icon
              style={styles.searchIcon}
              name="search"
              size={isTablet ? 18 : 16}
              color={Colors.white}
            />
            <TextInput 
              placeholder='Tìm kiếm . . .'
              placeholderTextColor={Colors.white}
              style={styles.searchInput}
            />
            
          </View>
          <View style={styles.leftSearchWrap}>
          <Icon
              style={styles.bellIcon}
              name="bell"
              size={isTablet ? 18 : 16}
              color={Colors.white}
            />
          </View>
        </View>
        <View style={styles.lowerHeader}></View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.paddingForHeader}></View>
        <View style={styles.scrollViewContent}></View>
      </ScrollView>
    </View>
  );
};

export default MAIN_BookshelvesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperHeaderPlacehoder: {
    height: 40,
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Colors.primary
  },
  upperHeader: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: "space-between"
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center"
  },
  searchIcon: {
    marginLeft: 8
  }
  ,
  searchInput: {
    position: "absolute",
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    paddingVertical: 4,
    paddingLeft: 32
  },
  leftSearchWrap: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,

  },
  bellIcon: {
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  lowerHeader: {
    height: 96
  },
  paddingForHeader: {
    height: 96,
  }
  ,
  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: Colors.white
  }
})