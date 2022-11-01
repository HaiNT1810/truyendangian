import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';
import * as actions from '@app/redux/global/Actions';
import { Images } from '@app/themes';


const slides = [
    {
        key: 0,
        title: 'Trang demo intro',
        text: 'Giới thiệu về app',
        image: "",//Images.images.intro1
    },
    {
        key: 1,
        title: 'Hướng dẫn tìm truyện',
        text: 'Hển thị ảnh hướng dẫn tìm truyện',
        image: "",
    },
    {
        key: 2,
        title: 'Hướng dẫn đăng nhập',
        text: 'Lợi ích của đăng nhập',
        image: "",
    },
    {
        key: 3,
        title: 'done',
        text: 'Chúc các bạn có những phút giây đọc truyện vui vẻ!',
        image: "",
    },
];

const IntroScreen = (props) => {
    const dispatch = useDispatch();

    const _renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', padding: 20, marginTop: 80 }}>
                <Text style={styles.title}>{item.title}</Text>
                {item.image ? <Image source={item.image} style={styles.image} resizeMode="contain" /> : <></>}
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
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
            dotStyle={{ color: 'transparent' }}
            activeDotStyle={{ color: 'transparent' }}
            dotClickEnabled={true}
        />
    );
}
export default IntroScreen;
const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSquare: {
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
});