import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {

  const [currentGoal, setCurrentGoal] = useState<string>('');
  const [goalsList, setGoalsList] = useState<string[]>([]);

  const inputHandler = (item: string) => {
    setCurrentGoal(item);
  };

  const addGoalHandler = () => {
    // do not add empty inputs
    if(currentGoal.trim() === ''){
      return;
    }
    
    setGoalsList((prevState) => [...prevState, currentGoal]);
    setCurrentGoal('')    
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={inputHandler} value={currentGoal} style={styles.textInput} placeholder='Your next goal' />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView>
        {goalsList.map((item,index) => (
          <View style={styles.goalItem} key={index}>
            <Text style={styles.goalItemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "70%",
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e6e6e6",
  },
  goalItemText: {
    color: "black",
    textTransform: "capitalize",
  }
});
