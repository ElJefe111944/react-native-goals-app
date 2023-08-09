import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface GoalItemProps {
  text: string;
  deleteGoalHandler: () => void 
}

const GoalItem: React.FC<GoalItemProps> = ({ text, deleteGoalHandler }) => {
  return (
      <View style={styles.goalItem}>
        <Pressable onPress={deleteGoalHandler} android_ripple={{ color: "#003a9d69" }} style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#0b5eed",
    borderColor: '#404040',
  },
  goalText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    backgroundColor: '#003a9d69',
  },
});

export default GoalItem;
