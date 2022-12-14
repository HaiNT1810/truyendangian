import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ActivityIndicator, RefreshControl, FlatList, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@app/themes';
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import { TDHeader } from '@app/components';
import { Stories_itemInList, Stories_listempty } from '@app/components/stories';
import { demoTruyens } from '@app/utils/data';
let isTablet = DeviceInfo.isTablet();

const MAIN_LikedScreen = (props) => {
    const { } = props;
    const [loading, setLoading] = useState(true);//cả trang reload lại
    const [refreshing, setRefreshing] = useState(true);//không load lại cả trang
    const [data, setData] = useState([]);
    const [takenTotal, setTakenTotal] = useState(6);//đã lấy
    const [total, setTotal] = useState(20);//Tổng số lượng trong ds sẽ lấy
    const [footerLoad, setFooterLoad] = useState(false);//load dữ liệu khi đến cuối trang
    const dispatch = useDispatch();

    useEffect(() => {
        var fetchData = async () => {
            if (!data || takenTotal > data.length) {
                setData([...data, ...demoTruyens]);
            }
            setLoading(false);
            setRefreshing(false);
        };
        if (loading || refreshing)
            fetchData();
        return () => { };
    }, [loading, refreshing])

    //Loadmore flatlist
    const getLoadMore = async () => {
        setFooterLoad(true);
        if (takenTotal < total) {
            setTakenTotal(takenTotal + 6);
            setRefreshing(true);
        }
        else {
            setFooterLoad(false);
        }
    };

    const keyExtractor = useCallback((item, index) => index, []);
    const renderItem = useCallback(({ item, index }) => <Stories_itemInList item={item} order={index + 1} />, []);
    return (
        <View style={{ flex: 1 }}>
            <TDHeader title={"Ưa thích"}></TDHeader>
            {loading ? (
                <ActivityIndicator size="large" color="#fb8c00" style={{ flex: 1, justifyContent: 'center' }} />
            ) : (
                <View style={styles.container}>
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10, justifyContent: 'center', alignItems: "stretch" }}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        data={data ? data : []}
                        renderItem={renderItem}
                        //onScroll={(a, b) => { _handleOnScroll(a, b) }}
                        keyExtractor={keyExtractor}
                        ListEmptyComponent={() => (
                            <Stories_listempty title="Danh sách ưa thích trống" 
                            content="Dường như bạn chưa thêm truyện nào vào danh sách ưa thích"></Stories_listempty>
                        )}
                        onEndReached={() => {
                            getLoadMore()
                        }}
                        onEndReachedThreshold={0.5}
                        numColumns={2}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true) }} />}
                    //ListFooterComponent={footerLoad ? <ActivityIndicator size="large" color="#fb8c00" style={{ flex: 1, justifyContent: 'center' }} /> : <View><Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingTop: 30, paddingBottom: 30 }}>Đã hết danh sách!</Text></View>}
                    />
                </View>
            )}
        </View>
    );
};

export default MAIN_LikedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})