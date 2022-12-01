import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from "react-native";
import { WINDOW_WIDTH } from "@app/utils";
import { Colors } from "@app/themes";

const Comic_ItemImage = (props) => {
  const { data, index } = props
  return <View style={styles.newsItem}>
    <TouchableOpacity onPress={() => { navigation.navigate('//path to navigate', { id: data.ID }); }}>
      <Image style={styles.newsImage} source={data.Image}></Image>
      <Text style={styles.score}>{data.Score}</Text>
      <Text style={styles.newsTitle}>{index + 1}</Text>
    </TouchableOpacity>
  </View>
}

export default Comic_ItemImage;

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
    fontWeight: 'bold',
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