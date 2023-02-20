import {
    View, Text, Image, Button, StyleSheet, ImageBackground, Pressable
    , TouchableOpacity
} from "react-native";

const InfoScreen = (props) => {

    const navigation = props.navigation;

    const changeScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBgTop}>
                <Image style={styles.img} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            </ImageBackground>
            <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>Họ tên</Text>
                    <Text style={styles.text}>Lê Công Tuấn Hùng</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>MSV</Text>
                    <Text style={styles.text}>PH25613</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => changeScreen("Store")}>
                <Image style={styles.imgBackground}
                    source={require('../../assets/shop.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#Edeef1'
    },
    infoContainer: {
        backgroundColor: '#fff',
        marginVertical: 64,
        borderRadius: 8,
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 100,

    },
    pressable: {
        width: '100%',
        height: '100%'
    },
    imgBackground: {
        width: 90,
        height: 90,
        backgroundColor: '#C0EEF2',
        borderRadius: 20,
    },
    imgBgTop:{
        width: '100%',
        height: 160,
        backgroundColor: '#4cd64c',
        paddingTop:90,
        alignItems: 'center',
    },
    textContainer: {
        borderBottomWidth: 1,
        textAlign: 'center',
        borderColor: '#ccc',
        paddingHorizontal: 48,
        paddingVertical: 24,
    },
    text: {
        fontSize: 24,
    },
    textHeader: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingBottom: 16
    }
})

export default InfoScreen;
