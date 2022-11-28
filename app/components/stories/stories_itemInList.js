/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '@app/themes';

const Stories_itemInList = (props) => {
    const navigation = useNavigation();
    const { item, order } = props;
    const [imgHeight, setImgHeight] = useState(0);
    const onLayout = (event) => {
        const { x, y, height, width } = event.nativeEvent.layout;
        setImgHeight(width * (1 / Images.size.storiesItem));
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
            <TouchableOpacity onPress={() => { console.log("natigate item " + item.ID) }}>
                <ImageBackground source={item.Image} style={[styles.image, { height: imgHeight }]} >
                    <View style={{ position: 'absolute', top: 10, left: 10 }}>
                        <Text style={styles.score}>{item.Score.toFixed(1)}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View >
    );
};

export default Stories_itemInList;

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%' },
    image: { flex: 1, resizeMode: 'center', margin: 5, borderRadius: 10, overflow: 'hidden' },
    score: { backgroundColor: Colors.primary, paddingHorizontal: 7, paddingVertical: 3, borderRadius: 5, color: Colors.secondary }
})
