import React, { Fragment, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { demoBanner } from '@app/utils/data';
import Component_Header from '../Component_Header';
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '@app/themes';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import { Flex } from '@ant-design/react-native';
import TDButtonPrimary from '../TDButtonPrimary';

const Comic_Home_Header = (props) => {
  const navigation = useNavigation();
  const { type, headerText, showSeeMore, onPressSeeMoreFunc } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setData(demoBanner)
      setLoading(false);
    };
    if (loading)
      fetchData();
    return () => { };
  }, [loading, data])
  return (
    data && <Fragment>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={data.Image}></Image>
        <View style={styles.searchBar}>
          <Image style={styles.iconVector} source={Images.logo}></Image>
          <View style={styles.searchBell} >
            <Icon
              style={styles.searchIcon}
              name="search"
              size={16}
              color={Colors.white}
            />
            <Icon
              style={styles.bellIcon}
              name="bell"
              size={16}
              color={Colors.white}
            />
          </View>
        </View>
        <View style={styles.descriptionBox}>
          <Text numberOfLines={1} style={styles.bannerTitle}>{data.Title}</Text>
          <Text numberOfLines={1} style={styles.bannerDecripton}>{data.Description}</Text>
          <View style={styles.actionWrap}>
            <TDButtonPrimary
              imageStyle={styles.imageButton}
              image={Images.icons.play}
              contentStyle={styles.buttonRead}
              title='Đọc ngay' />
            <TDButtonPrimary
              imageStyle={styles.imageButton}
              image={Images.icons.plus}
              contentStyle={styles.buttonLike}
              title='Thích' />
          </View>
        </View>
      </View>
    </Fragment>
  );
}

export default Comic_Home_Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: WINDOW_WIDTH,
    height: 330,
    position: 'relative'
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  searchBar: {
    position: 'absolute',
    top: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20
  },
  searchBell: {
    flexDirection: 'row',
    width: 45,
    justifyContent: 'space-between'
  },
  descriptionBox: {
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    width: '100%',
    backgroundColor: "#28282873",
  },
  bannerTitle: {
    color: Colors.white,
    fontSize: 20,
    width: '65%',
    marginBottom: 5
  },
  bannerDecripton: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 5
  },
  actionWrap: {
    flexDirection: 'row',
  },
  buttonRead: {
    width: 120,
    borderRadius: 50,
    height: 40,
    padding: 5,
    marginRight: 10
  },
  buttonLike: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.white,
    width: 120,
    borderRadius: 50,
    height: 40,
    padding: 5
  },

})