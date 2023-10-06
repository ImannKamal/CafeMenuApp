import React, { useState } from "react";
import { Text,StyleSheet,View,Image,TextInput,Dimensions,FlatList,TouchableOpacity,TouchableOpacityComponent,SafeAreaView, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const listTab = [
  {
    status: "All Food",
  },
  {
    status: "Malaysian Food",
  },
  {
    status: "Western Food",
  },
  {
    status: "Arabic Food",
  },
];

const data = [
  {
    id: '001',
    title: 'Chicken Chop',
    price : 'RM 8.00',
    imgUrl: require('../src/image/Chicken Chop.jpeg'),
    status : 'Western Food',
    navigateTo: "Booth: Westernize"
  },
  {
    id: '002',
    title: 'Nasi Goreng Chicken Chop',
    price : 'RM 10.00',
    imgUrl: require('../src/image/Nasi Goreng Chicken Chop.jpg'),
    status : 'Western Food',
    navigateTo: "Booth: Westernize"
  },
  {
    id: '003',
    title: 'Lamb Chop',
    price : 'RM 12.00',
    imgUrl: require('../src/image/Lamb Chop.jpg'),
    status : 'Western Food',
    navigateTo: "Booth: Westernize"
  },
  {
    id: '004',
    title: 'Nasi Goreng Lamb Chop',
    price : 'RM 14.00',
    imgUrl: require('../src/image/Nasi Goreng Lamb Chop.jpg'),
    status : 'Western Food',
    navigateTo: "Booth: Westernize"
  },
  {
    id: '005',
    title: 'Fish And Fries',
    price : 'RM 7.00',
    imgUrl: require('../src/image/Fish And Fries.jpg'),
    status : 'Western Food',
    navigateTo: "Booth: Westernize"
  },
  {
    id: '006',
    title: 'Shawarma',
    price : 'RM 7.00',
    imgUrl: require('../src/image/Shawarma.jpg'),
    status : 'Arabic Food',
    navigateTo: "Booth: Original Syrian"
  },
  {
    id: '007',
    title: 'Roti John',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Roti John.jpg'),
    navigateTo: "Booth: Original Syrian"
  },
  {
    id: '008',
    title: 'Burger Pak Hang',
    price : 'RM 9.00',
    imgUrl: require('../src/image/Burger Pak Hang.jpg'),
    status : 'Western Food',
    navigateTo: "Booth: Original Syrian"
  },
  {
    id: '009',
    title: 'Burrito & Mix',
    price : 'RM 9.00',
    imgUrl: require('../src/image/Burrito & Mix.jpg'),
    status : 'Western Food',
    navigateTo: "Booth: Original Syrian"
  },
  {
    id: '010',
    title: 'Pizza',
    price : 'RM 5.00',
    imgUrl: require('../src/image/Pizza.jpg'),
    status : 'Western Food',
    navigateTo: "Booth: Original Syrian"
  },
  {
    id: '011',
    title: 'Roti Canai',
    price : 'RM 1.50',
    imgUrl: require('../src/image/Roti Canai.jpg'),
    navigateTo: "Booth: Roti Canai Mamu"
  },
  {
    id: '012',
    title: 'Roti Telur',
    price : 'RM 2.50',
    imgUrl: require('../src/image/Roti Telur.jpg'),
    navigateTo: "Booth: Roti Canai Mamu"
  },
  {
    id: '013',
    title: 'Roti Cheese',
    price : 'RM 2.50',
    imgUrl: require('../src/image/Roti Cheese.JPG'),
    navigateTo: "Booth: Roti Canai Mamu"
  },
  {
    id: '014',
    title: 'Roti Susu',
    price : 'RM 3.00',
    imgUrl: require('../src/image/Roti Susu.jpg'),
    navigateTo: "Booth: Roti Canai Mamu"
  },
  {
    id: '015',
    title: 'Roti Planta',
    price : 'RM 2.50',
    imgUrl: require('../src/image/Roti Planta.jpg'),
    navigateTo: "Booth: Roti Canai Mamu"
  },
  {
    id: '016',
    title: 'Mee Bandung',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Mee Bandung.jpg'),
    navigateTo: "Booth: Soup Fiesta"
  },
  {
    id: '017',
    title: 'Mee Kari',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Mee Kari.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Soup Fiesta"
  },
  {
    id: '018',
    title: 'Mee Siam',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Mee Siam.jpg'),
    navigateTo: "Booth: Soup Fiesta"
  },
  {
    id: '019',
    title: 'Laksa',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Laksa.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Soup Fiesta"
  },
  {
    id: '020',
    title: 'Sup Utara',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Sup Utara.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Soup Fiesta"
  },
  {
    id: '021',
    title: 'Eggs Sandwich',
    price : 'RM 2.00',
    imgUrl: require('../src/image/Eggs Sandwich.jpg'),
    navigateTo: "Booth: Ginger Bits!"
  },
  {
    id: '022',
    title: 'Grilled Chicken Sandwich',
    price : 'RM 4.00',
    imgUrl: require('../src/image/Grilled Chicken Sandwich.jpg'),
    navigateTo: "Booth: Ginger Bits!"
  },
  {
    id: '023',
    title: 'Bbq Chicken Sandwich',
    price : 'RM 3.00',
    imgUrl: require('../src/image/Bbq Chicken Sandwich.jpg'),
    navigateTo: "Booth: Ginger Bits!"
  },
  {
    id: '024',
    title: 'Chicken Slice Sandwich',
    price : 'RM 3.50',
    imgUrl: require('../src/image/Chicken Slice Sandwich.jpg'),
    navigateTo: "Booth: Ginger Bits!"
  },
  {
    id: '025',
    title: 'Beef Blackpepper Sandwich',
    price : 'RM 3.50',
    imgUrl: require('../src/image/Beef Blackpepper Sandwich.jpg'),
    navigateTo: "Booth: Ginger Bits!"
  },
  {
    id: '026',
    title: 'Nasi Ayam Ghepok',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Nasi Ayam Ghepok.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Rasa Nusantara"
  },
  {
    id: '027',
    title: 'Nasi Ayam',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Nasi Ayam.jpeg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Rasa Nusantara"
  },
  {
    id: '028',
    title: 'Nasi Ayam Penyet',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Nasi Ayam Penyet.jpeg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Rasa Nusantara"
  },
  {
    id: '029',
    title: 'Nasi Tomato',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Nasi Tomato.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Rasa Nusantara"
  },
  {
    id: '030',
    title: 'Nasi Kukus Ayam Cincang',
    price : 'RM 6.00',
    imgUrl: require('../src/image/Nasi Kukus Ayam Cincang.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Rasa Nusantara"
  },
  {
    id: '031',
    title: 'Nasi Lemak',
    price : 'RM 3.00',
    imgUrl: require('../src/image/Nasi Lemak.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Breakfast Aloha!"
  },
  {
    id: '032',
    title: 'Nasi Goreng',
    price : 'RM 3.00',
    imgUrl: require('../src/image/Nasi Goreng.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Breakfast Aloha!"
  },
  {
    id: '033',
    title: 'Mee Goreng',
    price : 'RM 3.00',
    imgUrl: require('../src/image/Mee Goreng.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Breakfast Aloha!"
  },
  {
    id: '034',
    title: 'Kuey Teow Goreng',
    price : 'RM 3.00',
    imgUrl: require('../src/image/Kuey Teow Goreng.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Breakfast Aloha!"
  },
  {
    id: '035',
    title: 'Maggi Goreng',
    price : 'RM 3.00',
    imgUrl: require('../src/image/Maggi Goreng.jpg'),
    status : 'Malaysian Food',
    navigateTo: "Booth: Breakfast Aloha!"
  },
];


const separator = () => {
  return <View style={{ height: 1, backgroundColor: "#f1f1f1" }} />;
};

const Practice = () => {

  const [status, setStatus] = useState("All Food")
  const [datalist, setDatalist] = useState(data);;
  const setStatusFilter = (status) => {
    if (status !== "All Food") {
      setDatalist([...data.filter((e) => e.status === status)]);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

const navigation = useNavigation()
const renderItem = ({  item, index }) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <View style={styles.itemLogo}>
        <Image
            style={styles.itemImage}
            source={item.imgUrl}
        />
      </View>
      <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.title}</Text>
      </View>
      <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.price}</Text>
      </View>
      <View style={styles.container}>
        <Button color="#ff5c5c"
        title="Go to Booth"
        onPress={() => navigation.navigate(item.navigateTo)}
        />
      </View>
     </View>
  );
 };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
          data={datalist}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 15,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "aqua",
    padding: 15,
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 4,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    padding: 10,
    justifyContent: "center",
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: "#e6838d",
  },

  textTabActive: {
    color: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },

  itemLogo: {
    padding: 10,
  },

  itemImage: {
    width: 200,
    height: 200,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
  },
});