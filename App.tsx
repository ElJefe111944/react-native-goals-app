import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import * as Crypto from 'expo-crypto';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const UUID = Crypto.randomUUID();


  const [goalsList, setGoalsList] = useState<{ text: string; key: string }[]>([]); // array of objects 


  const addGoalHandler = (goalText: string) => {
    
    setGoalsList((prevState) => [...prevState, 
      {text: goalText, key: UUID},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList 
        data={goalsList}
        renderItem={({item}) => (
            <GoalItem text={item.text} />
        )}
        keyExtractor={(item) => item.key}
      />
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
});
