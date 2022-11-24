import React, { Fragment, useState } from 'react';
import Swiper from 'react-native-swiper'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Colors, Images } from '@app/themes';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
import { ComicBlock, ComicMenu, ComicSlide } from './components'
let isTablet = DeviceInfo.isTablet();

let data = [
  {
    id: 1,
    name: 'Demon slayder',
    image: Images.comics.comic_1,
    rate: 10.0
  },
  {
    id: 2,
    name: 'Attack on titan',
    image: Images.comics.comic_2,
    rate: 9.8
  },
  {
    id: 3,
    name: `The king's avatar`,
    image: Images.comics.comic_3,
    rate: 9.7
  }
]

const MAIN_ComicScreen = () => {
  
  return (
    <Fragment>
      <View style={{ height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight }}></View>
      <StatusBar translucent backgroundColor={Colors.primary} />
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.upperHeaderPlacehoder}></View>
        </SafeAreaView>
        <SafeAreaView style={styles.header} backgroundColor={Colors.primary}>
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
          <View style={styles.lowerHeader}>
          </View>
        </SafeAreaView>
        <ScrollView>
          <View style={styles.paddingForHeader}>
            <ComicSlide/>
          </View>
          <View style={styles.scrollViewContent}>
            <ComicMenu/>
            <ComicBlock
              data={data}
              title="Truyện đang đọc"
            />
          </View>
        </ScrollView>
      </View>
    </Fragment>

  );
};

export default MAIN_ComicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 160,
  },
  paddingForHeader: {
    height: 160,
    backgroundColor: Colors.white,
  }
  ,
  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: Colors.white,
    paddingHorizontal: 16
  },
  slide_1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.slide_1,
  },
  slide_2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.slide_2
  },
  slide_3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.slide_3
  },
  slideWrapper: {
    flex: 1,
    width: WINDOW_WIDTH - 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold'
  },
  paginationStyle: {
    left: 15,
    bottom: 15,
    justifyContent: 'flex-start',
  },
  dotStyle: {
    marginRight: 8
  },

})