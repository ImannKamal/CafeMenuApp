import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const MainMenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Image source={require('./home1.png')}
      style={{height:600, width: 600, alignSelf: "center"}}
    />
    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>SELECT MAHALLAH</Text>
    <View style={[{ width: "8%", marginTop: 10, backgroundColor: "white" }]}>
        <Button
          color="#ff5c5c"
          title="Mahallah Ali"
          onPress={() => navigation.navigate('Mahallah Ali')}
          style={{ height: 100, marginTop: 10 }}
        />
      </View>
      <View style={[{width: "8%", marginTop: 20, backgroundColor: "white" }]}>
        <Button
        title="Mahallah Faruq"
        onPress={() => navigation.navigate('Mahallah Faruq')}
      />
      </View>
  </View>
);
}

export default MainMenu;
