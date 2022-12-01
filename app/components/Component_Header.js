/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Flex } from '@ant-design/react-native';
import { Colors } from '@app/themes';

///Dòng tiêu đề, xem thêm của 1 list ngoài trang chủ
const Component_Header = (props) => {
  let { headerText, textIcon, seeMore= { show, onPressFunc } } = props;
  headerText = headerText || "";
  return (
    <View
      style={styles.lineStyle}>
      <Flex justify="between">
        <Text style={styles.headerText}>
          {headerText}
        </Text>
        {seeMore.show ? (<TouchableOpacity onPress={seeMore.onPressFunc}>
          <Text style={{ ...styles.seeMore, color: textIcon?.color }}>
            Xem thêm
          </Text></TouchableOpacity>) : (<></>)}
      </Flex>
    </View>
  );
};

export default Component_Header;

const styles = StyleSheet.create({
  headerText: { color: Colors.text, paddingTop: 15, paddingBottom: 15, fontWeight: 'bold', fontSize: 18 },
  itemImage: { width: 75, height: 75, marginBottom: 2, marginRight: 10, borderRadius: 5 },
  seeMore: { color: Colors.primary, fontWeight: 'bold', fontSize: 15 }
});
