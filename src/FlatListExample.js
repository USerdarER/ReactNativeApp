import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const DATA = [
  { id: 1, title: 'first' },
  { id: 2, title: 'second' },
];
const FlatListExample = () => {
  return (
    <SafeAreaView>
      <Text>Flat List Example</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default FlatListExample;
