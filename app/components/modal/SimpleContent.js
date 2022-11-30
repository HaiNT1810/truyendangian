import { Colors } from '@app/themes';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const SimpleContent = (props) => {
    const { title, modalVisible, setModalVisible } = props;
    useEffect(() => {
        if (modalVisible) {
            ModalShow();
        }
        return () => { };
    }, [modalVisible]);
    const modal = useRef(null);

    const ModalHide = () => {
        setModalVisible(false);
        modal.current?.close();
    };

    const ModalShow = () => {
        modal.current?.open();
    };

    return (
        <Portal>
            <Modalize ref={modal}
                onOverlayPress={() => console.log("123123123")}
                adjustToContentHeight
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                HeaderComponent={
                    <View style={styles.header__content}>
                        <Text style={styles.header__icon}></Text>
                        <Text style={styles.header__text}>{title}</Text>
                        <TouchableOpacity
                            style={styles.header__icon}
                            onPress={() => {
                                ModalHide();
                            }}>
                            <FontAwesome5Icon name={'times'} size={24} color={Colors.gray} />
                        </TouchableOpacity>
                    </View>
                }>
                {props.children}
            </Modalize>
        </Portal>
    );
}

export default SimpleContent;

const styles = StyleSheet.create({

    header__content: {
        height: 56,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    header__text: { flex: 1, textAlign: 'center', fontSize: 20, color: Colors.primary, fontWeight: 'bold' },
    header__icon: { width: 25 }
});
