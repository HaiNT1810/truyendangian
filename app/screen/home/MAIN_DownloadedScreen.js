import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { Colors, Images } from '@app/themes';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import { TDHeader } from '@app/components';
import { demoTruyens } from '@app/utils/data';
import { Stories_itemInListDownloaded, Stories_listempty } from '@app/components/stories';
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
                            return <Stories_itemInListDownloaded item={item} order={index + 1} imgHeight={imgHeight} />;
                        }}
                        //onScroll={(a, b) => { _handleOnScroll(a, b) }}
                        keyExtractor={(item, index) => index.toString()}
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