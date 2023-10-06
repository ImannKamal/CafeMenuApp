import React from 'react';
import { View, Text, Button } from 'react-native';

const MainMenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Main Menu</Text>
      <Button title="Mahallah Ali" onPress={() => navigation.navigate('Mahallah Ali')} />
      <Button title="Mahallah Faruq" onPress={() => navigation.navigate('Mahallah Faruq')} />
    </View>
  );
}

export default MainMenu;
