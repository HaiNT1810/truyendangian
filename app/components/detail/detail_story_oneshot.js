/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '@app/themes';
import Detail_Header from './detail_Header';
import { useDispatch } from 'react-redux';
import { Comment_StartView } from '../interactive';

const Detail_story_oneshot = (props) => {
    const { item } = props;
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>
            <Detail_Header image={item.Image} title={item.Title}
                description={item.Description} score={item.Score}
                types={["4+", "1 tập", "Truyện cười", "Truyện dân gian"]}
                showContent={true} content={"Nội dung truyện để đọc"}></Detail_Header>
            <Comment_StartView type="business" dataId={1}></Comment_StartView>
        </View>
    );
};

export default Detail_story_oneshot;

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%' },
    image: { flex: 1, resizeMode: 'center', margin: 5, borderRadius: 10, overflow: 'hidden' },
    score: { backgroundColor: Colors.primary, paddingHorizontal: 7, paddingVertical: 3, borderRadius: 5, color: Colors.secondary }
})
