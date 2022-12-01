/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { demoTruyens } from '@app/utils/data';
import Component_Header from '../Component_Header';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@app/themes';
import { WINDOW_WIDTH } from '@app/utils';
import {Comic_ItemImage}  from '@app/components/comic'

//render 1 list dạng kéo sang ngang
const Comic_List_Horizontal = (props) => {
  const navigation = useNavigation();
  const { type, headerText, showSeeMore, onPressSeeMore } = props;
  const [loading, setLoading] = useState(true);
  const [takenTotal, setTakenTotal] = useState(2);//đã lấy
  const [total, setTotal] = useState(20);//Tổng số lượng trong ds sẽ lấy
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (type == "tophit")
        setData([...data, ...demoTruyens]);
      else if (type == "opened")
        setData([...data, ...demoTruyens]);
      setLoading(false);

    };
    if (loading)
      fetchData();
    return () => { };
  }, [loading, data])


  return (
    data && <View style={{ paddingHorizontal: 15 }}>
      <Component_Header headerText={headerText}
        style={styles.headerText}
        textIcon={{ color: Colors.primary }}
        seeMore={{ show: showSeeMore == null ? true : showSeeMore, onPressFunc: onPressSeeMore }}
      ></Component_Header>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        data={data ? data : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Comic_ItemImage data={item} index={index}/>}
      />

    </View>
  );
};

export default Comic_List_Horizontal;

const styles = StyleSheet.create({
  newsItem: {
    paddingRight: 6,
    width: WINDOW_WIDTH / 3 - 20
  },
  headerText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  newsImage: {
    width: '100%',
    height: 150,
    marginBottom: 0,
    marginRight: 10,
    borderRadius: 8,
    borderColor: 'silver',
    overflow: 'hidden'
  },
  newsTitle: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    bottom: 10, left: 5,
    color: Colors.white,
    backgroundColor: "#28282873",
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  newsParams: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  score: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: Colors.primary,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    color: Colors.secondary,
    width: 35,
    textAlign: 'center'
  }
})
