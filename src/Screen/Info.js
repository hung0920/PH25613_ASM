import { View, Text, Image, Button, StyleSheet } from "react-native";

const InfoScreen = (props) => {

    const navigation = props.navigation;

    const changeScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
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
            <Button style={styles.btn} title="Store" onPress={() => changeScreen('Store')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        alignItems: 'center',
    },
    infoContainer: {
        backgroundColor: '#fff',
        marginVertical: 16,
        borderRadius: 16,
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 100,

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
        paddingBottom:16
    }
})

export default InfoScreen;
