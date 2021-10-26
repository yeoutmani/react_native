import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [entredGoal, setEntredGoal] = useState("");
  const [myGoal, setMyGoal] = useState([]);

  const goalInputHandler = (entredText) => {
    setEntredGoal(entredText);
  };

  const addGoalHandler = () => {
    console.log("entredGoal", entredGoal);
    setMyGoal((currentGoals) => [...currentGoals, entredGoal]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="add" onPress={addGoalHandler} />
      </View>
      <View>
        {myGoal.map((goal) => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
  },
});
