/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { Colors, Fonts, Images } from '@app/themes';

const TDHeader = (props) => {
  const { title } = props;
  const { left } = props;//left="logo"||null,"back"
  const { right } = props;//right="none"
  const navigation = useNavigation();
  //Left là logo. ko click gì
  const _renderLeftComponent_logo = () => (
    <View
      style={{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}>
      <Image source={Images.logos}></Image>
    </View>
  );
  //Left là nút back lại
  const _renderLeftComponent_stack = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="angle-left" size={24} color={Colors.black} underlayColor="#00000000" />
    </TouchableOpacity>
  );
  //Right là nút search
  const _renderRightComponent = () => (
    <TouchableOpacity onPress={() => { navigation.navigate("Story_filterScreen") }}
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: Colors.primary10,
        borderRadius: 10
      }}>
      <FontAwesome name={'sliders-h'} size={18} color={Colors.primary} />
    </TouchableOpacity>
  );

  return (
    <Header
      statusBarProps={{ barStyle: 'light-content', backgroundColor: 'transparent', translucent: true }}
      barStyle="light-content"
      placement="left"
      leftComponent={left == "back" ? <_renderLeftComponent_stack /> : <_renderLeftComponent_logo />}
      centerComponent={{
        text: title,
        style: { color: '#2E2E2E', ...Fonts.style.extralarge_bold },
      }}
      rightComponent={right == "none" ? <></> : <_renderRightComponent />}
      containerStyle={{
        backgroundColor: Colors.background,
        borderBottomWidth: 0,
        justifyContent: 'space-around',
      }}
      centerContainerStyle={{ justifyContent: 'center' }}
    />
  );
};

export default TDHeader;

const styles = StyleSheet.create({});
