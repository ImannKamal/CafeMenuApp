import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button,Image } from 'react-native';
import Login from './Login';
import Signup from './Signup';
import MainMenu from './MainMenu';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCdZS5qDJ1e_hMmjOYaYl28gRWF1EsKAuA",
  authDomain: "react-ef77b.firebaseapp.com",
  projectId: "react-ef77b",
  storageBucket: "react-ef77b.appspot.com",
  messagingSenderId: "901770240612",
  appId: "1:901770240612:web:8910d03ba7158a88857571",
  measurementId: "G-FEJVEF0STY"
};

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  firebase.initializeApp(firebaseConfig);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('./home1.png')}
        style={{height:600, width: 600, alignSelf: "center"}}/>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        color='blue'
        style={{ height: 100, marginTop: 10 }}
      />
      
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        color='blue'
        
      />
    </View>
  );
}

import Mahallah1 from './Mahallah/Mahallah1';
import Mahallah2 from './Mahallah/Mahallah2';
import Booth1 from './Booth/Booth1';
import Booth2 from './Booth/Booth2';
import Booth3 from './Booth/Booth3';
import Booth4 from './Booth/Booth4';
import Booth5 from './Booth/Booth5';
import Booth6 from './Booth/Booth6';
import Booth7 from './Booth/Booth7';
import { useState, useEffect } from 'react';

const App = () => {
  const [useLogged, setUserLogged] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true:false)
    })
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={({route, navigation}) =>({
        headerStyle: {
          backgroundColor: 'white', //Set Header color
        },
        headerRight: () => (useLogged && <Button title='Signout' onPress={() => {
          firebase.auth().signOut().then(function() {
            // Sign-out successful.
            navigation.navigate('Login')
          }).catch(function(error) {
            // An error happened.
          });
        }}></Button>),
      })}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Mahallah Ali" component={Mahallah1} />
        <Stack.Screen name="Mahallah Faruq" component={Mahallah2} />
        <Stack.Screen name="Booth: Westernize" component={Booth1} />
        <Stack.Screen name="Booth: Original Syrian" component={Booth2} />
        <Stack.Screen name="Booth: Roti Canai Mamu" component={Booth3} />
        <Stack.Screen name="Booth: Soup Fiesta" component={Booth4} />
        <Stack.Screen name="Booth: Ginger Bits!" component={Booth5} />
        <Stack.Screen name="Booth: Rasa Nusantara" component={Booth6} />
        <Stack.Screen name="Booth: Breakfast Aloha!" component={Booth7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
