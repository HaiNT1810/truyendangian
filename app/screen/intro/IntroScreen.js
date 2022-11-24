import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '@app/redux/global/Actions';
import { Colors, Fonts, Images } from '@app/themes';
import { constBaseType, constType } from '@app/utils/data'

const slides = [
    {
        key: 0,
        title: 'Trang demo intro',
        text: 'Giới thiệu về app',
        image: "",//Images.images.intro1
    },
    {
        key: 1,
        title: 'Bạn ưa thích thể loại gì',
        text: 'Lựa chọn thể loại truyện để chúng tôi hiểu bạn hơn từ đó đề xuất những mẩu truyện phù hợp.',
        image: "",
    },
    // {
    //     key: 2,
    //     title: 'Hướng dẫn đăng nhập',
    //     text: 'Lợi ích của đăng nhập',
    //     image: "",
    // },
    {
        key: 3,
        title: 'TD truyện dân gian',
        text: 'Nơi mang đến những phút giây giải trí thư giãn vui vẻ!',
        image: require("@app/assets/images/bg-min.jpg"),
    },
];

const IntroScreen = (props) => {
    const dispatch = useDispatch();
    const [baseType, setBaseType] = useState([]);//Truyện tranh|truyện chữ
    const [type, setType] = useState([]);//các thể loại truyện

    const _setBaseType = (code) => {
        if (baseType.includes(code))//nếu đã có thì bỏ đi
            setBaseType(baseType => baseType.filter(x => x != code));
        else//nếu chưa có thì push vào
            setBaseType(baseType => [...baseType, code])
    }
    const _setType = (code) => {
        if (type.includes(code))//nếu đã có thì bỏ đi
            setType(type => type.filter(x => x != code));
        else//nếu chưa có thì push vào
            setType(type => [...type, code])
    }

    const _renderItem = ({ item }) => {
        switch (item.key) {
            case 1://bước chọn thể loại ưa thích
                return (
                    <View style={{ flex: 1, alignItems: 'flex-start', padding: 20 }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                        <Text style={styles.typeTitle}>{constBaseType.title}</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {constType.data.map(x => {
                                return (
                                    <View key={x.code} style={[styles.typeItem.general, type.includes(x.code) ? styles.typeItem.active : styles.typeItem.normal]}>
                                        <TouchableOpacity key={"bt" + x.code} onPress={() => { _setType(x.code) }}>
                                            <Text style={type.includes(x.code) ? styles.typeItemText.active : styles.typeItemText.normal}>{x.name}</Text>
                                        </TouchableOpacity>
                                    </View>)
                            })}
                        </View>
                    </View >
                );
            default:
                return (
                    <View style={{ flex: 1, alignItems: 'center', overflow: "hidden" }}>
                        {item.image ?
                            <ImageBackground source={item.image} style={[styles.image]} >
                                <View style={{ flex: 1, alignItems: 'center', paddingVertical: 80, backgroundColor: "rgba(0,0,0,0.7)" }}>
                                    <Text style={[styles.title, { paddingBottom: 20 }]}>{item.title}</Text>
                                    <Text style={[styles.text, { color: Colors.white }]}>{item.text}</Text>
                                </View>
                            </ImageBackground> :
                            <>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>{item.text}</Text>
                            </>
                        }
                    </View >
                );
        }
    }
    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="arrow-forward-circle"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    const _renderSkipButton = () => {
        return (
            <View style={styles.buttonSquare}>
                <Text style={{ color: "#fff", fontWeight: 'bold' }}>Bỏ qua</Text>
            </View>
        );
    };
    const doneIntro = async () => {
        dispatch(actions.setLoadIntro(true));
        dispatch(actions.setFavorite({ favoriteBaseType: baseType, favoriteType: type }));
    }

    return (
        <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            renderSkipButton={_renderSkipButton}
            showSkipButton={true}
            onDone={() => doneIntro()}
            onSkip={() => doneIntro()}
            activeDotStyle={{ backgroundColor: Colors.primary }}
            canCancelContentTouches={true}
        />
    );
}
export default IntroScreen;
const styles = StyleSheet.create({
    title: { color: Colors.primary, fontSize: Fonts.size.h3 },
    image: {
        flexDirection: "row",
        flex: 1,
        resizeMode: 'cover'
    },
    text: { fontSize: Fonts.size.input, textAlign: "center" },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSquare: {
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    typeTitle: { color: Colors.primary, fontSize: Fonts.size.h5 },
    typeItem: {
        general: { fontSize: Fonts.size.large, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 7, margin: 5 },
        normal: { borderWidth: 1, borderColor: Colors.primary },
        active: { backgroundColor: Colors.primary }
    },
    typeItemText: {
        normal: { color: Colors.primary },
        active: { color: Colors.white }
    }
});