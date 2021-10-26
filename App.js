import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems:"center" }}>
        <TextInput
          placeholder="Course goals"
          style={{ 
           width: "80%" , borderBottomColor: "black", borderWidth: 1 }}
        />
        <Button title="add" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
