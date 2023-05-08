import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trekking Gear on Rent</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Rent Trekking Gear in Bangalore</Text>
        <Text style={styles.description}>
          Get top-quality trekking gear on rent from SharePal. Choose from a
          wide range of backpacks, tents, sleeping bags, and more at affordable
          prices.
        </Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
  },
});

export default CategoryPage;
