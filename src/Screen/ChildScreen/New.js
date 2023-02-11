import { View, StyleSheet, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";

export default function NewScreen(props) {

    const [nameState,setName] = useState('');
    const [addressState,setAddress] = useState('');
    const [phoneState,setPhone] = useState('');
    const [logoState,setLogo] = useState('');
    const [stateState,setState] = useState('');

    const navigation = props.navigation;

    const changeScreen = (screen, data={}) => {
        navigation.navigate(screen, data);
    }

    const route = props.route;
    const id = route.params?.id
    useEffect(() =>{
        if(id != 0){
            setName(route.params.name);
            setAddress(route.params.address);
            setPhone(route.params.phone);
            setLogo(route.params.logo);
            setState(route.params.state);
        }
    },[]);

    return (
        <View style={styles.container}>
            <TextInput style={styles.textIP} value={nameState} onChangeText={setName} placeholder={'Name'}/>
            <TextInput style={styles.textIP} value={addressState} onChangeText={setAddress} placeholder={'Address'}/>
            <TextInput style={styles.textIP} value={phoneState} onChangeText={setPhone} placeholder={'Phone'}/>
            <TextInput style={styles.textIP} value={logoState} onChangeText={setLogo} placeholder={'Logo'}/>
            <TextInput style={styles.textIP} value={stateState} onChangeText={setState} placeholder={'State'}/>
            <Button title='Done' onPress={() => changeScreen('Store',{id:id,name:nameState, address:addressState, 
                phone:phoneState, logo:logoState, state:stateState})}/>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    textIP:{
        width: '80%',
        height:60,
        fontSize:32,
        borderWidth:1,
        marginTop:16,
        textAlign:'center'
    }
})