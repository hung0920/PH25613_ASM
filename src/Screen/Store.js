import { View, Text, FlatList, Button, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StoreScreen = (props) => {
    const navigation = props.navigation;

    const changeScreen = (screen, data = {}) => {
        navigation.navigate(screen, data);
    }

    const [data, setData] = useState([])

    const route = props.route;

    const name = route.params?.name;
    const address = route.params?.address;
    const phone = route.params?.phone;
    const logo = route.params?.logo;
    const state = route.params?.state;

    useEffect(() => {
        const loadData = async () => {
            const storedData = await AsyncStorage.getItem('data');
            const parsedData = storedData ? JSON.parse(storedData) : [];
            setData(parsedData);
        };
        loadData();
    }, []);

    useEffect(() => {
        if (route.params !== undefined) {
            const id = route.params.id;
            if (id !== 0) {
                const newList = data.map(item => {
                    if (item.id == id) {
                        item.name = name;
                        item.address = address;
                        item.phone = phone;
                        item.logo = logo;
                        item.state = state;
                    }
                    return item;
                });
                setData(newList);
                AsyncStorage.setItem('data', JSON.stringify(newList));
                return;
            }
            const newItem = {
                name: name,
                address: address,
                phone: phone,
                logo: logo,
                state: state,
                id: data.length == 0
                    ? 1
                    : data[data.length - 1].id + 1
            };
            const newList = [...data, newItem];
            setData(newList);
            AsyncStorage.setItem('data', JSON.stringify(newList));
        }
    }, [route.params]);


    const deleteItem = (id) => {
        const newList = data.filter((item) => {
            return item.id !== id;
        });
        setData(newList);
        AsyncStorage.setItem('data', JSON.stringify(newList));
    }

    return (
        <View>
            <Button title="New" onPress={() => changeScreen('New', { id: 0 })} />
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={styles.itemView}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.img} source={{ uri: item.logo }} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text>Mã cửa hàng: {item.id}</Text>
                            <Text>Tên cửa hàng: {item.name}</Text>
                            <Text>Địa chỉ: {item.address}</Text>
                            <Text>SDT: {item.phone}</Text>
                            {item.state === 0 ? <Text>Trạng thái: CLose</Text> : <Text>Trạng thái: Open</Text>}
                        </View>
                        <View style={styles.pressableContainer}>
                            <Pressable onPress={() => changeScreen('New', {
                                id: item.id, name: item.name, address: item.address, phone: item.phone,
                                logo: item.logo, state: item.state
                            })}>
                                <Text>Sửa</Text>
                            </Pressable>
                            <Pressable onPress={() => deleteItem(item.id)}>
                                <Text>Xóa</Text>
                            </Pressable>
                        </View>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemView: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 8
    },
    img: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        },
    textContainer: {
        flex: 1
    },
    pressableContainer: {
        marginLeft: 8
    }
});



export default StoreScreen;