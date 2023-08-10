import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import * as Crypto from 'expo-crypto';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const UUID = Crypto.randomUUID();


  const [goalsList, setGoalsList] = useState<{ text: string; key: string; }[]>([]); // array of objects 
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const addGoalHandler = (goalText: string) => {

    setGoalsList((prevState) => [...prevState,
    { text: goalText, key: UUID },
    ]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (key: string) => {
    setGoalsList((prevState) => {
      return prevState.filter((item) => item.key !== key);
    });
  };

  return (
    <View style={styles.appContainer}>
 
        <View>
          <Button title='Open' onPress={() => setModalVisible(!modalVisible)} />
        </View>

      <GoalInput onAddGoal={addGoalHandler} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={({ item }) => (
            <GoalItem text={item.text} deleteGoalHandler={() => deleteGoalHandler(item.key)} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 60,
    paddingHorizontal: 16,
    flex: 1,
    marginTop: 0,
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
    marginTop: 25,
    paddingTop: 10,
  },
});
