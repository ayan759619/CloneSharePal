import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SharePal</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
          <Text style={styles.category}>Trekking Gear on Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
          <Text style={styles.category}>Camping Gear on Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
          <Text style={styles.category}>Cycling Gear on Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
          <Text style={styles.category}>Snow Gear on Rent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    fontSize: 18,
    paddingVertical: 20,
  },
});

export default HomePage;
