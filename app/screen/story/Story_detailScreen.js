/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { demoTruyens } from '@app/utils/data'
import { showMessage } from 'react-native-flash-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Detail_story_oneshot } from '@app/components/detail';

const Story_detailScreen = (props) => {
    const { } = props;
    const route = useRoute();
    const id = route?.params?.id;
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {
            const _data = demoTruyens.filter(x => x.ID == id);
            if (_data && !Object.keys(_data).length == 0) {
                setData(_data[0]);
            }
            else {
                console.log("comback")
                //todo: chỗ này có thể check data nếu null thì screen hiển thị nội dung not found
                showMessage({
                    message: 'Truyện không tồn tại!',
                    type: 'danger',
                });
                navigation.goBack()
            }
            setIsLoading(false);
        }
        if (isLoading)
            fetchData();
    }, [id])

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>
            {/* todo: Kiểm tra thể loại chap: oneshot thì hiển thị detail và đọc luôn truyện */}
            {data && <Detail_story_oneshot item={data}></Detail_story_oneshot>}
            {/* todo: Dài tập thì có nút đọc hoặc tải */}
        </ScrollView >
    );
};

export default Story_detailScreen;

const styles = StyleSheet.create({
    container: { marginHorizontal: 10 },

});
