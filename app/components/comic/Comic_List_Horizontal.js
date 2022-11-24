/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { demoTruyens } from '@app/utils/data';
import Component_Header from '../Component_Header';
import { useNavigation } from '@react-navigation/native';

const Comic_List_Horizontal = (props) => {
  const navigation = useNavigation();
  const { type, headerText, showSeeMore, onPressSeeMore } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (type == "tophit")
        setData(demoTruyens);
      else if (type == "opened")
        setData(demoTruyens.sort(a,b=>{}));
      setLoading(false);
    };
    if (loading)
      fetchData();
    return () => { };
  }, [loading])

  const renderItem = (item, index) => {
    return (
      <View style={styles.newsItem}>
        <TouchableOpacity onPress={() => { navigation.navigate('//path to navigate', { id: item.ID }); }}>
          <Image style={styles.newsImage} source={item.Image}></Image>
          {/* <Text style={styles.newsTitle}>{item.title}</Text> */}
          <Text style={styles.newsTitle}>{index}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <Component_Header headerText={headerText}
        seeMore={{ show: showSeeMore == null ? true : showSeeMore, onPressFunc: onPressSeeMore }}
        textIcon={{ name: "bags-shopping", color: Colors.blueHope, size: 18 }}></Component_Header>
      <FlatList
        horizontal={true}
        data={demoTruyens}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default Comic_List_Horizontal;

const styles = StyleSheet.create({
  newsItem: { width: width * 0.75, padding: 10 },
  headerText: { paddingTop: 8, paddingLeft: 15, paddingBottom: 8, fontWeight: 'bold', fontSize: 18 },
  newsImage: { width: '100%', height: 150, marginBottom: 0, marginRight: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5, borderColor: 'silver', borderWidth: 1 },
  newsTitle: { width: '100%', paddingLeft: 10, paddingRight: 10, position: 'absolute', bottom: 38, left: 0, color: '#fff', backgroundColor: "#28282873", fontSize: 16, textAlign: 'center' },
  newsParams: { paddingLeft: 10, paddingRight: 10, paddingTop: 8, paddingBottom: 8, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }

})
