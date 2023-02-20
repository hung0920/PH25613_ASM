import {
    View, Text, Pressable, Image, StyleSheet, Animated,
    ImageBackground, TouchableOpacity
} from "react-native";
import { useEffect } from "react";

export default function HomeScreen(props) {

    const navigation = props.navigation;

    const logoMoveUp = new Animated.Value(1000);
    const btnMoveUp = new Animated.Value(1000);
    const lgOpacity = new Animated.Value(0);
    const btnOpacity = new Animated.Value(0);
    const btnScale = new Animated.Value(1);

    const changeScreen = (screen) => {
        navigation.navigate(screen);
    };

    //Chạy anim khi vừa vào màn hình
    useEffect(() => {
        const logoMoveUpAnimated = Animated.timing(logoMoveUp, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        });

        const btnMoveUpAnimated = Animated.timing(btnMoveUp, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        });

        const logoOpacityAnim = Animated.timing(lgOpacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start();

        const btnOpacityAnim = Animated.timing(btnOpacity, {
            toValue: 1,
            duration: 6000,
            useNativeDriver: true
        }).start();

        Animated.sequence([logoMoveUpAnimated, btnMoveUpAnimated]).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.imageContainer,
                {
                    transform: [{ translateY: logoMoveUp }],
                    opacity: lgOpacity
                },
            ]}>
                <Image style={styles.img}
                    source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </Animated.View>
            <Animated.View
                style={[styles.btnContainer, {
                    transform: [{ translateY: btnMoveUp }],
                    opacity: btnOpacity
                }]}>

                <TouchableOpacity
                    onPress={() => changeScreen("Info")}>
                    <Image style={styles.imgBackground}
                        source={require('../../assets/user.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => changeScreen("Store")}>
                    <Image style={styles.imgBackground}
                        source={require('../../assets/shop.png')} />
                </TouchableOpacity>

            </Animated.View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    imageContainer: {
        marginTop: 16
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 50,
        marginVertical: 16,
    },
    imgBackground: {
        width: 90,
        height: 90,
        backgroundColor: '#C0EEF2',
        borderRadius: 10,
        marginHorizontal: 16,
        marginVertical: 24,
        resizeMode: "contain"
    },
    text: {
        fontSize: 24,
        color: 'white'
    }
});