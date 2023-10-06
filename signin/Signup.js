import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import firebase from 'firebase';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }

  return (
    <View>
    <Image source={require('./MAKAN.jpeg')}  style={{width: '100%', height: '100%'}}/>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderWidth: 1, padding: 5, margin: 5 }}
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
      <Button title="Signup" onPress={handleSubmit} />
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
}

export default Signup;
