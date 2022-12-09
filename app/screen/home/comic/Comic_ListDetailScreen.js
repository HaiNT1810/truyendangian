import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ActivityIndicator, RefreshControl, FlatList, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@app/themes';
import { TDHeader } from '@app/components';
import { Stories_itemInList, Stories_listempty } from '@app/components/stories';

const Comic_ListDetailScreen = (props) => {
    const { data, title } = props;
    const [loading, setLoading] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <TDHeader title={title}></TDHeader>
            {loading ? (
                <ActivityIndicator size="large" color="#fb8c00" style={{ flex: 1, justifyContent: 'center' }} />
            ) : (
                <View style={styles.container}>
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10, justifyContent: 'center', alignItems: "stretch" }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        data={data ? data : []}
                        renderItem={({ item, index }) => {
                            return <Stories_itemInList item={item} order={index + 1} />;
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={() => (
                            <Stories_listempty title="Danh sách ưa thích trống" content="Dường như bạn chưa thêm truyện nào vào danh sách ưa thích"></Stories_listempty>
                        )}
                        onEndReached={() => {
                            getLoadMore()
                        }}
                        onEndReachedThreshold={0.5}
                        numColumns={2}
                        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => { setLoading(true) }} />}
                    />
                </View>
            )}
        </View>
    );
};

export default Comic_ListDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})