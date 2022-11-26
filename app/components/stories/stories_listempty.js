/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { demoTruyens } from '@app/utils/data';
import Component_Header from '../Component_Header';
import { useNavigation } from '@react-navigation/native';
import { Colors, Images, Fonts } from '@app/themes';

const Stories_listempty = (props) => {
    const { title, content } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images.list.empty} />
            <Text style={styles.title}>{title ?? "Không có dữ liệu!"}</Text>
            {content ? <Text style={styles.content}>{content}</Text> : <></>}
        </View>
    );
};

export default Stories_listempty;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginHorizontal: 10 },
    image: { resizeMode: 'contain', width: 200, },
    title: { color: Colors.primary, fontSize: Fonts.size.h4, marginBottom: 20 },
    content: { color: Colors.gray, textAlign: 'center', fontSize: Fonts.size.large }
})
