import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button,Image } from 'react-native';
import Login from './Login';
import Signup from './Signup';
import MainMenu from './MainMenu';
import firebase from 'firebase';

const Stack = createStackNavigator();

const firebaseConfig = {
    apiKey: "AIzaSyCdZS5qDJ1e_hMmjOYaYl28gRWF1EsKAuA",
    authDomain: "react-ef77b.firebaseapp.com",
    projectId: "react-ef77b",
    storageBucket: "react-ef77b.appspot.com",
    messagingSenderId: "901770240612",
    appId: "1:901770240612:web:8910d03ba7158a88857571",
    measurementId: "G-FEJVEF0STY"
  };


const HomeScreen = ({ navigation }) => {
  firebase.initializeApp(firebaseConfig);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('./MAKAN.jpeg')}  style={{width: '100%', height: '100%'}}/>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        color='blue'
        style={{ marginTop: 10 }}
      />
      
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        color='blue'
        
      />
    </View>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
