import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts, Images } from '@app/themes';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@app/utils';
import TDButtonPrimary from '../TDButtonPrimary';

const Detail_Header = (props) => {
    const { image, title, description, showDesc, score, types, showContent, content } = props;
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={true}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.headerContainer}>
                <Image style={styles.headerImage} source={image}></Image>
                <View style={styles.topBtn}>
                    <View style={styles.topBtn_left}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome name="arrow-left" size={24} color={Colors.white} underlayColor="#00000000" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topBtn_right}>

                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
                    <TouchableOpacity style={styles.titleIcon}>
                        <FontAwesome name="bookmark" size={24} color={Colors.black} underlayColor="#00000000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.rateNType}>
                    <TouchableOpacity style={styles.rate}>
                        <FontAwesome name="star-half-alt" size={24} solid color={Colors.primary} underlayColor="#00000000" style={styles.rateIcon} />
                        <Text style={styles.rateNType_score}>{score}</Text>
                        <FontAwesome name="angle-right" size={28} color={Colors.primary} underlayColor="#00000000" style={styles.rateIcon} />
                    </TouchableOpacity>
                    {types && types.length && types.map((x, i) => { return (<Text key={"type" + i} style={styles.type}>{x}</Text>) })}
                </View>
                {showDesc && <Text style={styles.content}>{description}</Text>}
                {showContent && <Text style={styles.content}>{content}</Text>}

            </View>
        </ScrollView>
    );
}

export default Detail_Header;

const styles = StyleSheet.create({
    headerContainer: { width: WINDOW_WIDTH, height: 250, position: 'relative' },
    headerImage: { width: '100%', height: '100%', resizeMode: 'cover' },
    topBtn: {
        position: 'absolute', top: 50, flexDirection: 'row',
        justifyContent: 'space-between', width: '100%', marginHorizontal: 20
    },
    topBtn_right: {},
    titleContainer: { marginVertical: 20, flexDirection: 'row' },
    titleText: { fontSize: Fonts.size.h3, color: Colors.black, fontWeight: 'bold', width: "80%" },
    titleIcon: { alignSelf: "center", paddingHorizontal: 20 },
    rateNType: { flexDirection: 'row', flex: 1, flexWrap: 'wrap' },
    rate: { flexDirection: 'row' },
    rateIcon: { marginRight: 15 },
    rateNType_score: { color: Colors.primary, fontSize: Fonts.size.h5, marginRight: 15 },
    type: {
        fontSize: Fonts.size.large, color: Colors.primary,
        borderWidth: 1, borderColor: Colors.primary, marginRight: 10,
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10,
        marginBottom: 3
    },
    desc: { fontSize: Fonts.size.input, marginVertical: 10, color: Colors.darkGray },
    content: { fontSize: Fonts.size.input, marginVertical: 10, color: Colors.darkGray }
})