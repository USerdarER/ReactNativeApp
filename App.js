import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import FlatListExample from './src/FlatListExample';

const App = () => {
  const [name, setName] = useState('Mehmet');
  const [profile, setProfile] = useState({ followers: 40, following: 50 });
  const changeName = () => setName('Ahmet');
  const [friends, setFriends] = useState(['Can', 'Serdar']);
  const incrementFollowers = () => {
    setProfile({
      ...profile,
      followers: profile.followers + 1,
      following: profile.following - 1,
    });
  };

  const addFriend = () => {
    setFriends(['Filiz', ...friends]);
  };

  useEffect(() => {
    console.log('component mount oldu');
  }, []);

  useEffect(() => {
    console.log('name state güncellendi');
  }, []);

  useEffect(() => {
    console.log('friends state güncellendi');
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Selam {name}</Text>
      </View>
      <Button title="Update State" onPress={changeName}></Button>
      <View>
        <Text>Follower {profile.followers}</Text>
        <Text>Follower {profile.following}</Text>
      </View>
      <Button title="Update State" onPress={incrementFollowers}></Button>
      <View>
        {friends.map((item, key) => (
          <Text key={key}>{item}</Text>
        ))}
      </View>
      <Button title="Add Friend" onPress={addFriend}></Button>
      <FlatListExample></FlatListExample>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});

export default App;
