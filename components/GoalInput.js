import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = props => {

    const [entredGoal, setEntredGoal] = useState("");

    const goalInputHandler = (entredText) => {
        console.log('entredText', entredText);
      setEntredGoal(entredText);
    };
  
    
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goals"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={entredGoal}
      />
      <Button title="add" onPress={props.onAddGoal.bind(this, entredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
  }
});

export default GoalInput;
