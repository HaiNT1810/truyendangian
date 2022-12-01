import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Images } from '@app/themes';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import { TDHeader } from '@app/components';
import { demoTruyens } from '@app/utils/data';
import { Stories_itemInListDownloaded, Stories_listempty } from '@app/components/stories';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Divider } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { SimpleContent } from '@app/components/modal';
let isTablet = DeviceInfo.isTablet();

const MAIN_DownloadedScreen = (props) => {
    const { } = props;
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [takenTotal, setTakenTotal] = useState(6);//đã lấy
    const [total, setTotal] = useState(20);//Tổng số lượng trong ds sẽ lấy
    const [footerLoad, setFooterLoad] = useState(false);//load dữ liệu khi đến cuối trang
    const dispatch = useDispatch();
    const [imgHeight, setImgHeight] = useState(100);//đã lấy
    const [deleteItem, setDeleteItem] = useState(null);

    useEffect(() => {
        var fetchData = async () => {
            if (!data || takenTotal > data.length) {
                setData([...data, ...demoTruyens]);
            }
            setLoading(false);
        };
        if (loading)
            fetchData();
        return () => { };
    }, [loading])

    //Loadmore flatlist
    const getLoadMore = async () => {
        setFooterLoad(true);
        if (takenTotal < total) {
            setTakenTotal(takenTotal + 6);
            setLoading(true);
        }
        else {
            setFooterLoad(false);
        }
    };

    useEffect(() => {
        if (deleteItem) {
            setModalVisible(true);
        }
        return () => { };
    }, [deleteItem])

    useEffect(() => {
        if (modalVisible == false) {
            setDeleteItem(null);
        }
        return () => { };
    }, [modalVisible])

    const delDownloaded = (item) => {
        setDeleteItem(item);
    };

    const delItem = () => {
        setModalVisible(false);
    };

    const keyExtractor = useCallback((item, index) => index, []);
    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <TDHeader title={"Đã tải"}></TDHeader>
            {loading ? (
                <ActivityIndicator size="large" color="#fb8c00" style={{ flex: 1, justifyContent: 'center' }} />
            ) : (
                <View style={styles.container}>
                    <FlatList
                        onLayout={(event) => {
                            const { x, y, height, width } = event.nativeEvent.layout;
                            setImgHeight(width * (1 / Images.size.storiesItem));
                        }}
                        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10, justifyContent: 'center', alignItems: "stretch" }}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        data={data ? data : []}
                        renderItem={({ item, index }) => {
                            return <Stories_itemInListDownloaded item={item} order={index + 1} imgHeight={imgHeight} delFunc={delDownloaded} />;
                        }}
                        //onScroll={(a, b) => { _handleOnScroll(a, b) }}
                        keyExtractor={keyExtractor}
                        ListEmptyComponent={() => (
                            <Stories_listempty title="Bạn chưa tải truyện nào" content="Tải truyện về máy để có thể đọc ngay cả khi không có internet"></Stories_listempty>
                        )}
                        onEndReached={() => {
                            getLoadMore()
                        }}
                        onEndReachedThreshold={0.5}
                        numColumns={1}
                        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => { setLoading(true) }} />}
                    //ListFooterComponent={footerLoad ? <ActivityIndicator size="large" color="#fb8c00" style={{ flex: 1, justifyContent: 'center' }} /> : <View><Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingTop: 30, paddingBottom: 30 }}>Đã hết danh sách!</Text></View>}
                    />
                    {deleteItem ?
                        <SimpleContent title={"Bạn có chắc muốn xóa?"} modalVisible={modalVisible} setModalVisible={setModalVisible}>
                            <View style={styles.content}>
                                <Stories_itemInListDownloaded item={deleteItem} imgHeight={imgHeight} />
                                <View style={styles.btn}>
                                    <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                                        <Text style={[styles.btn.general, styles.btn.reset]}>Hủy</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={delItem}>
                                        <Text style={[styles.btn.general, styles.btn.apply]}>Xóa</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SimpleContent>
                        : <></>}
                </View>
            )}
        </View>
    );
};

export default MAIN_DownloadedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10, marginVertical: 20,
        general: { fontSize: Fonts.size.h6, fontWeight: 'bold', borderRadius: 20, paddingHorizontal: 25, paddingVertical: 10, margin: 5 },
        reset: { backgroundColor: Colors.primary10, color: Colors.primary },
        apply: { backgroundColor: Colors.primary, color: Colors.white }
    },
    content: { padding: 20, },
    content__confirm: { marginBottom: 2, fontSize: Fonts.size.h5, color: Colors.black, fontWeight: 'bold', textAlign: 'center' },
})