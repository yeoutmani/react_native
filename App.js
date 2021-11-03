import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [myGoal, setMyGoal] = useState([]);

  const addGoalHandler = (myGoal) => {
    setMyGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: myGoal },
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={myGoal}
        // call component GoalItem
        renderItem={(itemData) => <GoalItem 
          // Delete Item
          onDelete={() => console.log('hiii')}
          item={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
