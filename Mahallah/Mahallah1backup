import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar,} from 'react-native';
  
import Constants from 'expo-constants';

  const DATA = [
    {
      id: '001',
      title: 'Chicken Chop',
      price : 'RM 8.00',
      imgUrl: require('../src/image/Chicken Chop.jpeg'),
    },
    {
      id: '002',
      title: 'Nasi Goreng Chicken Chop',
      price : 'RM 10.00',
      imgUrl: require('../src/image/Nasi Goreng Chicken Chop.jpg'),
    },
    {
      id: '003',
      title: 'Lamb Chop',
      price : 'RM 12.00',
      imgUrl: require('../src/image/Lamb Chop.jpg'),
    },
    {
      id: '004',
      title: 'Nasi Goreng Lamb Chop',
      price : 'RM 14.00',
      imgUrl: require('../src/image/Nasi Goreng Lamb Chop.jpg'),
    },
    {
      id: '005',
      title: 'Fish And Fries',
      price : 'RM 7.00',
      imgUrl: require('../src/image/Fish And Fries.jpg'),
    },
    {
      id: '006',
      title: 'Shawarma',
      price : 'RM 7.00',
      imgUrl: require('../src/image/Shawarma.jpg'),
    },
    {
      id: '007',
      title: 'Roti John',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Roti John.jpg'),
    },
    {
      id: '008',
      title: 'Burger Pak Hang',
      price : 'RM 9.00',
      imgUrl: require('../src/image/Burger Pak Hang.jpg'),
    },
    {
      id: '009',
      title: 'Burrito & Mix',
      price : 'RM 9.00',
      imgUrl: require('../src/image/Burrito & Mix.jpg'),
    },
    {
      id: '010',
      title: 'Pizza',
      price : 'RM 5.00',
      imgUrl: require('../src/image/Pizza.jpg'),
    },
    {
      id: '011',
      title: 'Roti Canai',
      price : 'RM 1.50',
      imgUrl: require('../src/image/Roti Canai.jpg'),
    },
    {
      id: '012',
      title: 'Roti Telur',
      price : 'RM 2.50',
      imgUrl: require('../src/image/Roti Telur.jpg'),
    },
    {
      id: '013',
      title: 'Roti Cheese',
      price : 'RM 2.50',
      imgUrl: require('../src/image/Roti Cheese.JPG'),
    },
    {
      id: '014',
      title: 'Roti Susu',
      price : 'RM 3.00',
      imgUrl: require('../src/image/Roti Susu.jpg'),
    },
    {
      id: '015',
      title: 'Roti Planta',
      price : 'RM 2.50',
      imgUrl: require('../src/image/Roti Planta.jpg'),
    },
    {
      id: '016',
      title: 'Mee Bandung',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Mee Bandung.jpg'),
    },
    {
      id: '017',
      title: 'Mee Kari',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Mee Kari.jpg'),
    },
    {
      id: '018',
      title: 'Mee Siam',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Mee Siam.jpg'),
    },
    {
      id: '019',
      title: 'Laksa',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Laksa.jpg'),
    },
    {
      id: '020',
      title: 'Sup Utara',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Sup Utara.jpg'),
    },
    {
      id: '021',
      title: 'Eggs Sandwich',
      price : 'RM 2.00',
      imgUrl: require('../src/image/Eggs Sandwich.jpg'),
    },
    {
      id: '022',
      title: 'Grilled Chicken Sandwich',
      price : 'RM 4.00',
      imgUrl: require('../src/image/Grilled Chicken Sandwich.jpg'),
    },
    {
      id: '023',
      title: 'Bbq Chicken Sandwich',
      price : 'RM 3.00',
      imgUrl: require('../src/image/Bbq Chicken Sandwich.jpg'),
    },
    {
      id: '024',
      title: 'Chicken Slice Sandwich',
      price : 'RM 3.50',
      imgUrl: require('../src/image/Chicken Slice Sandwich.jpg'),
    },
    {
      id: '025',
      title: 'Beef Blackpepper Sandwich',
      price : 'RM 3.50',
      imgUrl: require('../src/image/Beef Blackpepper Sandwich.jpg'),
    },
    {
      id: '026',
      title: 'Nasi Ayam Ghepok',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Nasi Ayam Ghepok.jpg'),
    },
    {
      id: '027',
      title: 'Nasi Ayam',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Nasi Ayam.jpeg'),
    },
    {
      id: '028',
      title: 'Nasi Ayam Penyet',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Nasi Ayam Penyet.jpeg'),
    },
    {
      id: '029',
      title: 'Nasi Tomato',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Nasi Tomato.jpg'),
    },
    {
      id: '030',
      title: 'Nasi Kukus Ayam Cincang',
      price : 'RM 6.00',
      imgUrl: require('../src/image/Nasi Kukus Ayam Cincang.jpg'),
    },
    {
      id: '031',
      title: 'Nasi Lemak',
      price : 'RM 3.00',
      imgUrl: require('../src/image/Nasi Lemak.jpg'),
    },
    {
      id: '032',
      title: 'Nasi Goreng',
      price : 'RM 3.00',
      imgUrl: require('../src/image/Nasi Goreng.jpg'),
    },
    {
      id: '033',
      title: 'Mee Goreng',
      price : 'RM 3.00',
      imgUrl: require('../src/image/Mee Goreng.jpg'),
    },
    {
      id: '034',
      title: 'Kuey Teow Goreng',
      price : 'RM 3.00',
      imgUrl: require('../src/image/Kuey Teow Goreng.jpg'),
    },
    {
      id: '035',
      title: 'Maggi Goreng',
      price : 'RM 3.00',
      imgUrl: require('../src/image/Maggi Goreng.jpg'),
    },
  ];
  

  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={DATA}
          keyExtriactor={(time, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.container}>
                  <View style={{ margin: 10 }}>
                    {item.title && (
                      <Text
                        style={{paddingVertical: 10,fontSize: 25,paddingStart: 5,paddingEnd: 16,color: 'black',alignSelf: 'center',fontWeight: 'bold'}}>
                        {item.title}
                      </Text>
                    )}
                    {item.imgUrl && (
                      <Image source={item.imgUrl} style={{ height: 250, width: 250, alignSelf: 'center'}}/>
                    )}
                     {item.price && (
                      <Text
                        style={{ paddingVertical: 10, fontSize: 20, paddingStart: 5, paddingEnd: 16, color: 'black', alignSelf: 'center', fontWeight: 'bold'}}>
                        {item.price}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  