import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity } from 'react-native';
import { Colors, Images } from '@app/themes';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import { TDHeader } from '@app/components';
import { demoTruyens } from '@app/utils/data';
import { Stories_itemInListDownloaded, Stories_listempty } from '@app/components/stories';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Divider } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
let isTablet = DeviceInfo.isTablet();

const MAIN_BookshelvesScreen = (props) => {
    const { } = props;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [takenTotal, setTakenTotal] = useState(6);//đã lấy
    const [total, setTotal] = useState(20);//Tổng số lượng trong ds sẽ lấy
    const [footerLoad, setFooterLoad] = useState(false);//load dữ liệu khi đến cuối trang
    const dispatch = useDispatch();
    const [imgHeight, setImgHeight] = useState(100);//đã lấy
    const modalizeRef = useRef(null);

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

    const delDownloaded = (item) => {
        //show modal hỏi lại

        modalizeRef.current?.open();
        // let _data = data.filter(x => x.ID != id);
        // setData(_data);
        //todo: giải phóng bộ nhớ
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
                    <Portal>
                        <Modalize
                            scrollViewProps={{ showsVerticalScrollIndicator: false }}
                            ref={modalizeRef}
                            HeaderComponent={
                                <View style={styles.content}>
                                    <Text style={styles.textCenter}>{'Xóa khỏi đã tải'}</Text>
                                    <TouchableOpacity
                                        style={styles.icon_right}
                                        onPress={() => { modalizeRef.current?.close(); }}>
                                        <FontAwesome5Icon name={'times'} size={24} color={'#22313F'} />
                                    </TouchableOpacity>
                                </View>
                            }
                            adjustToContentHeight={true}
                            snapPoint={500}>
                            <View style={{ padding: 15, marginBottom: 20 }}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }}
                                    onPress={() => { modalizeRef.current?.close(); }}>
                                    <FontAwesome5Icon name="eye" size={20} color="#64B5F6" />
                                    <Text style={{ marginStart: 15, color: '#5B6062' }}>Xem nội dung tệp đính kèm</Text>
                                </TouchableOpacity>
                                <Divider style={{ marginVertical: 20, backgroundColor: '#E0E0E0' }} />
                                <TouchableOpacity
                                    onPress={() => { modalizeRef.current?.close(); }}
                                    style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }}>
                                    <FontAwesome5Icon name="download" size={20} color="#64B5F6" />
                                    <Text style={{ marginStart: 15, color: '#5B6062' }}>Tải xuống tệp đính kèm</Text>
                                </TouchableOpacity>
                                <Divider style={{ marginVertical: 20, backgroundColor: '#E0E0E0' }} />
                            </View>
                        </Modalize>
                    </Portal>
                </View>
            )}
        </View>
    );
};

export default MAIN_BookshelvesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})