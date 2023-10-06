import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const Booth7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Booth: Breakfast Aloha!</Text>
      </View>
      <Image source={require('./booth7.png')} 
        style={styles.image}
      />
    </View>
  );
};

export default Booth7;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: 'aliceblue',
    flex: 1,
    padding: 20,
  },
  image: {
    width: 620,
    height: 535,
    alignSelf: "center",
    borderColor: 'black',
    borderWidth: 2,
  },
  text: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 50,
    minWidth: '48%',
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
    alignSelf: "center",
  },
});