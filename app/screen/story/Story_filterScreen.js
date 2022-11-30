/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Colors, Fonts, Images } from '@app/themes';
import { TDHeader } from '@app/components';
import * as actions from '@app/redux/global/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { constBaseType, constType } from '@app/utils/data'

const Story_filterScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const listBaseType = useSelector(state => state.global.favoriteBaseType);
    const listType = useSelector(state => state.global.favoriteType);
    const [baseType, setBaseType] = useState([]);//Truyện tranh|truyện chữ
    const [type, setType] = useState([]);//các thể loại truyện

    useEffect(() => {
        setBaseType(listBaseType || []);
        setType(listType || []);
    }, [])

    const _setBaseType = useCallback((code) => {
        if (baseType.includes(code))//nếu đã có thì bỏ đi
            setBaseType(baseType => baseType.filter(x => x != code));
        else//nếu chưa có thì push vào
            setBaseType(baseType => [...baseType, code])
    });
    const _setType = useCallback((code) => {
        if (type.includes(code))//nếu đã có thì bỏ đi
            setType(type => type.filter(x => x != code));
        else//nếu chưa có thì push vào
            setType(type => [...type, code])
    });
    
    const reset = () => {
        setBaseType(listBaseType || []);
        setType(listType || []);
    }
    const apply = () => {
        dispatch(actions.setFavorite({ favoriteBaseType: baseType, favoriteType: type }));
    }

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>
            <TDHeader title={"Tìm kiếm truyện"} left="back" right="none"></TDHeader>
            <View style={styles.container}>
                <Text style={styles.typeTitle}>{constBaseType.title}</Text>
                <View style={styles.typeItem}>
                    {constBaseType.data.map(x => {
                        return (
                            <View key={x.code} style={[styles.typeItem.general, baseType.includes(x.code) ? styles.typeItem.active : styles.typeItem.normal]}>
                                <TouchableOpacity key={"bt" + x.code} onPress={() => { _setBaseType(x.code) }}>
                                    <Text style={baseType.includes(x.code) ? styles.typeItemText.active : styles.typeItemText.normal}>{x.name}</Text>
                                </TouchableOpacity>
                            </View>)
                    })}
                </View>
                <Text style={styles.typeTitle}>{constType.title}</Text>
                <View style={styles.typeItem}>
                    {constType.data.map(x => {
                        return (
                            <View key={x.code} style={[styles.typeItem.general, type.includes(x.code) ? styles.typeItem.active : styles.typeItem.normal]}>
                                <TouchableOpacity key={"bt" + x.code} onPress={() => { _setType(x.code) }}>
                                    <Text style={type.includes(x.code) ? styles.typeItemText.active : styles.typeItemText.normal}>{x.name}</Text>
                                </TouchableOpacity>
                            </View>)
                    })}
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={reset}>
                        <Text style={[styles.btn.general, styles.btn.reset]}>Đặt lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={apply}>
                        <Text style={[styles.btn.general, styles.btn.apply]}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Story_filterScreen;

const styles = StyleSheet.create({
    container: { marginHorizontal: 10 },
    typeTitle: { color: Colors.black, fontSize: Fonts.size.h5, marginTop: 20, marginBottom: 10 },
    typeItem: {
        flexDirection: 'row', flexWrap: 'wrap',
        general: { fontSize: Fonts.size.large, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 7, margin: 5 },
        normal: { borderWidth: 1, borderColor: Colors.primary },
        active: { backgroundColor: Colors.primary }
    },
    typeItemText: {
        normal: { color: Colors.primary },
        active: { color: Colors.white }
    },
    btn: {
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10, marginVertical: 20,
        general: { fontSize: Fonts.size.h6, fontWeight: 'bold', borderRadius: 20, paddingHorizontal: 25, paddingVertical: 10, margin: 5 },
        reset: { backgroundColor: Colors.primary10, color: Colors.primary },
        apply: { backgroundColor: Colors.primary, color: Colors.white }
    }
});
