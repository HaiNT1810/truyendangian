import React, { Fragment, useState } from 'react';
import Swiper from 'react-native-swiper'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  FlatList,
  ImageBackground
} from 'react-native';
import { Colors, Fonts, Images } from '@app/themes';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';
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
  const [color, setColor] = useState(Colors.primary);
  const handleSwiper = (index) => {
    switch (index) {
      case 0:
        setColor(Colors.slide_1);
        break;
      case 1:
        setColor(Colors.slide_2);
        break;
      case 2:
        setColor(Colors.slide_3);
        break;
      default:
        setColor(Colors.primary);
        break;
    }
  }
  return (
    <Fragment>
      <View style={{ height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight }}></View>
      <StatusBar translucent backgroundColor={color} />
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.upperHeaderPlacehoder}></View>
        </SafeAreaView>
        <SafeAreaView style={styles.header} backgroundColor={color}>
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
            <Swiper
              onIndexChanged={index => handleSwiper(index)}
              autoplayTimeout={4}
              autoplay={true}
              style={styles.swiper}
              activeDotColor={Colors.white}
              paginationStyle={styles.paginationStyle}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.dotStyle}
            >
              <View style={styles.slide_1}>
                <View style={styles.slideWrapper}>
                  <View>
                    <Text style={styles.text}>image</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>name</Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide_2}>
                <Text style={styles.text}>Text 2</Text>
              </View>
              <View style={styles.slide_3}>
                <Text style={styles.text}>Text 3</Text>
              </View>
            </Swiper>
          </View>
          <View style={styles.scrollViewContent}>
            <View style={styles.menuContent}>
              <View style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Icon
                    style={styles.group}
                    name="th-large"
                    size={28}
                    color={Colors.white}
                  />
                </View>
                <Text style={styles.menuLabel}>Danh mục</Text>
              </View>
              <View style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Icon
                    style={styles.group}
                    name="crown"
                    size={28}
                    color={Colors.white}
                  />
                </View>
                <Text style={styles.menuLabel}>BXH</Text>
              </View>
              <View style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Icon
                    style={styles.group}
                    name="tasks"
                    size={28}
                    color={Colors.white}
                  />
                </View>
                <Text style={styles.menuLabel}>Nhiệm vụ</Text>
              </View>
              <View style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Icon
                    style={styles.group}
                    name="heart"
                    size={28}
                    color={Colors.white}
                  />
                </View>
                <Text style={styles.menuLabel}>Theo dõi</Text>
              </View>
            </View>
            <View style={styles.blockContinuing}>
              <View style={styles.blockHeading}>
                <View style={styles.headingWrap}>
                  <Text style={styles.blockHeadingName}>Truyện đang đọc</Text>
                  <View style={styles.blockIcon}>
                    <Icon
                      style={styles.nextIcon}
                      name="chevron-right"
                      size={isTablet ? 18 : 16}
                      color={Colors.black}
                    />
                  </View>
                </View>
                <Text style={styles.blockViewAll}>Xem tất cả</Text>
              </View>
              <View style={styles.blockContent}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                  keyExtractor={item => item.id}
                  data={data}
                  renderItem={({ item }) => (
                    <View styles={styles.comicBlock}>
                      <ImageBackground source={item.image} style={styles.comicItem}>
                        <Text style={styles.rate}>{item.rate}</Text>
                        <Text styles={styles.name}>{item.name}</Text>
                      </ImageBackground>
                    </View>

                  )}
                />
              </View>
            </View>
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