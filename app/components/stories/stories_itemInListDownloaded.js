/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts, Images } from '@app/themes';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Stories_itemInListDownloaded = (props) => {
    const navigation = useNavigation();
    const { item, order, imgHeight, delFunc } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { console.log("natigate item " + item.ID) }}>
                <View style={{ flexDirection: 'row' }}>
                    <ImageBackground source={item.Image} style={[styles.image, { height: (imgHeight / 3) * 0.8 }]} resizeMode='contain'></ImageBackground>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{item.Title}</Text>
                        <View style={styles.download}>
                            <View style={{ flex: 2, alignItems: 'flex-start' }}>
                                <Text style={styles.downloadSize}>215.5 MB</Text>
                            </View>
                            <TouchableOpacity style={styles.downloadButton} onPress={() => { delFunc(item) }}>
                                <FontAwesome5Icon name="trash-alt" solid size={24} color={Colors.error} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        </View >
    );
};

export default Stories_itemInListDownloaded;

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%' },
    image: { margin: 5, borderRadius: 10, width: '80%', flex: 1 },
    title: { flex: 2, marginTop: 10, marginRight: 10, fontSize: Fonts.size.h4, fontWeight: 'bold', color: Colors.black },
    download: { flex: 1, flexDirection: 'row' },
    downloadSize: { fontSize: Fonts.size.large, color: Colors.primary, backgroundColor: Colors.lightPrimary, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 },
    downloadButton: { flex: 1, alignItems: 'center' }
})
