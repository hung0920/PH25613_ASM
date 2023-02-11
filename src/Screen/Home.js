import { View, Text, Pressable, Image, StyleSheet, Animated } from "react-native";
import { useEffect } from "react";

export default function HomeScreen(props) {

    const navigation = props.navigation;

    const fadeIn = new Animated.Value(-200);

    const changeScreen = (screen) => {
        navigation.navigate(screen);
    };

    useEffect(() => {
        Animated.timing(fadeIn, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View style={{
                transform: [{ translateX: fadeIn }]
            }}>
                <Image style={{width: 60,
                height: 60,
                borderRadius: 30}}
                source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </Animated.View>
            <Pressable style={styles.pressable} onPress={() => changeScreen("Info")}>
                <Text style={styles.text}>Info</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => changeScreen("Store")}>
                <Text style={styles.text}>Store</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginVertical: 16,
    },
    pressable: {
        backgroundColor: '#40d6c1',
        width: 90,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        marginVertical: 10
    },
    text: {
        fontSize: 24
    }
});