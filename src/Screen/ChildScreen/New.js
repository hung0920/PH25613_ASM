import { View, StyleSheet, TextInput, Button, Pressable, Text, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function NewScreen(props) {

    const [nameState, setName] = useState('');
    const [addressState, setAddress] = useState('');
    const [phoneState, setPhone] = useState('');
    const [logoState, setLogo] = useState('');
    const [stateState, setState] = useState('');

    const navigation = props.navigation;

    const changeScreen = (screen, data = {}) => {
        if (!nameState || !addressState || !phoneState || !logoState || !stateState) {
            alert('Dữ liệu không được để trống');
            return;
        }
        navigation.navigate(screen, data);
    }

    const resetValue = () => {
        Alert.alert('Reset value',
            'Bạn có chắc muốn cài lại tất cả giá trị ?', [
            {
                text: 'Cancel',
                onPress: () => { },
            },
            {
                text: 'OK', onPress: () => {
                    setName(''),
                    setAddress(''),
                    setPhone(''),
                    setLogo(''),
                    setState('')
                }
            },
        ]);
    }

    const route = props.route;
    const id = route.params?.id
    useEffect(() => {
        if (id != 0) {
            setName(route.params.name);
            setAddress(route.params.address);
            setPhone(route.params.phone);
            setLogo(route.params.logo);
            setState(route.params.state);
        }
    }, []);

    return (
        <View style={styles.container}>
            <TextInput style={styles.textIP} value={nameState} onChangeText={setName} placeholder={'Name'} />
            <TextInput style={styles.textIP} value={addressState} onChangeText={setAddress} placeholder={'Address'} />
            <TextInput style={styles.textIP} value={phoneState} onChangeText={setPhone} placeholder={'Phone'} />
            <TextInput style={styles.textIP} value={logoState} onChangeText={setLogo} placeholder={'Logo'} />
            <TextInput style={styles.textIP} value={stateState} onChangeText={setState} placeholder={'State'} />
            <View style={{width:'50%',flexDirection:'row', justifyContent:'space-between'}}>
                <Pressable style={styles.cancelBtn} 
                    onPress={() => resetValue()}>
                    <Text style={styles.text}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.doneBtn}
                    onPress={() => changeScreen('Store', {
                        id: id, name: nameState, address: addressState,
                        phone: phoneState, logo: logoState, state: stateState
                    })}>
                    <Text style={styles.text}>Done</Text>
                </Pressable>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textIP: {
        width: '80%',
        height: 60,
        fontSize: 32,
        borderWidth: 1,
        marginTop: 16,
        textAlign: 'center',

    },
    doneBtn: {
        width: 90,
        backgroundColor: '#4ce85e',
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 16
    },
    cancelBtn: {
        width: 90,
        backgroundColor: 'red',
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 16
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})