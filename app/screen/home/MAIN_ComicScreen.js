import React, { Fragment, useState } from 'react';
import Swiper from 'react-native-swiper'
import {
  View,
  StyleSheet,

} from 'react-native';
import { Colors, Fonts, Images } from '@app/themes';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import { useNavigation } from '@react-navigation/native';
import { Comic_List_Horizontal, Comic_Home_Header } from '@app/components/comic';
const MAIN_ComicScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Comic_Home_Header  onPressSeeMoreFunc={() => { }}  />
      <Comic_List_Horizontal
        type='opened'
        headerText="Truyện đang đọc"
        showSeeMore={true}
        onPressSeeMore={() => {}}
      />
      <Comic_List_Horizontal
        type='tophit'
        headerText="Truyện HOT"
        showSeeMore={true}
        onPressSeeMore={() => navigation.navigate('Comic_ListDetailScreen')}
      />
    </View>
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
  menuContent: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  menuItem: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 6
  },
  menuIcon: {
    backgroundColor: Colors.primary,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 8
  },
  menuLabel: {
    color: Colors.text,
  },
  blockContinuing: {
    height: 180,
  },
  blockHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  headingWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  blockHeadingName: {
    fontSize: 18,
    fontWeight: '600',
    paddingRight: 4,
    color: Colors.text
  },
  blockViewAll: {
    color: Colors.primary
  },
  blockIcon: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'rgba(95, 95, 95, 0.15)',
    borderRadius: 16
  },
  nextIcon: {
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  comicBlock: {
  },
  comicItem: {
    width: WINDOW_WIDTH / 3,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
  }
})