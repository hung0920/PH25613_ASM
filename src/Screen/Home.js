import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export default function HomeScreen(props) {
    const navigation = props.navigation;
    const changeScreen = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={{alignItems: 'center'}}>
            <Image 
                style={styles.img}
                source={{uri: 'https://reactjs.org/logo-og.png'}}
            />
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
    img:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginVertical: 16
    },
    pressable:{
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