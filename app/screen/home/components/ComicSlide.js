import React from 'react';
import Swiper from 'react-native-swiper'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Colors, Images } from '@app/themes';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
const ComicSlide = () => {
  return <Swiper
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
}

export default ComicSlide;

const styles = StyleSheet.create({
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