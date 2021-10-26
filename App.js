import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View>
        <TextInput placeholder="Course goals" style={{borderBottomColor:'black', borderWidth:1}}/>
        <Button title="add"/>
    </View>
    <View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
