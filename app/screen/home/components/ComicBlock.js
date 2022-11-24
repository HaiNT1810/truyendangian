import React, { Fragment, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageBackground
} from 'react-native';
import { Colors, Fonts, Images } from '@app/themes';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
import { colors } from 'react-native-elements';
let isTablet = DeviceInfo.isTablet();
const ComicBlock = ({ data, title }) => (
  <View style={styles.blockContinuing}>
    <View style={styles.blockHeading}>
      <View style={styles.headingWrap}>
        <Text style={styles.blockHeadingName}>{title}</Text>
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
          <SafeAreaView style={styles.comicBlock}>
            <ImageBackground source={item.image} style={styles.comicItem}>
              <Text style={styles.comicRate}>{item.rate}</Text>
              <Text style={styles.comicName}>{item.name}</Text>
            </ImageBackground>
          </SafeAreaView>
        )}
      />
    </View>
  </View>

)

export default ComicBlock;

const styles = StyleSheet.create({
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
    width: WINDOW_WIDTH / 3,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  comicItem: {
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between'
  },
  comicRate: {
    backgroundColor: Colors.primary,
    width: 30,
    borderRadius: 15,
    overflow: 'hidden',
    color: Colors.white,
    textAlign: 'center',
    margin: 6,
    paddingHorizontal: 4,
    paddingVertical: 2
  },
  comicName: {
    color: colors.white,
    fontWeight: 'bold',
    margin: 4,
    fontSize: 16,

  }
})