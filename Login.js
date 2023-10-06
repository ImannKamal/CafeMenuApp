import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import firebase from 'firebase';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('MainMenu');
    })
    .catch(error => {
      console.log(error.message);
      alert(error.message);

    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./home1.png')}
        style={{height:600, width: 600, alignSelf: "center"}}
        />
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderWidth: 1, padding: 5, margin: 5 }}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={{ borderWidth: 1, padding: 5, margin: 5 }}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}

export default Login;
