import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/Home';
import InfoScreen from './src/Screen/Info';
import StoreScreen from './src/Screen/Store';
import NewScreen from './src/Screen/ChildScreen/New';

export default function App() {

  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} options={{
          headerShadowVisible:false
        }} />
        <stack.Screen name="Info" component={InfoScreen} options={{
          headerStyle:{
            backgroundColor:'#4cd64c',
          },
          headerTintColor:'#fff',
          headerShadowVisible:false
        }}/>
        <stack.Screen name="Store" component={StoreScreen} />
        <stack.Screen name="New" component={NewScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
