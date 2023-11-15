import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FakeStore } from "../../services/interfaces/fakestore.interface";

interface PropsInterface {
  list: FakeStore;
}

const ListFakeStore: React.FC<PropsInterface> = ({ list }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: list.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Product Name: {list.title}</Text>
        <Text style={styles.price}>Price: ${list.price}</Text>
        <Text style={styles.description} numberOfLines={2}>Description: {list.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'green', // Green color for the price
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'grey', // Grey color for description
  },
});

export default ListFakeStore;
