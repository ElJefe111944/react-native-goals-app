import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface GoalItemProps {
  text: string;
  deleteGoalHandler: () => void 
}

const GoalItem: React.FC<GoalItemProps> = ({ text, deleteGoalHandler }) => {
  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#404040",
    borderColor: '#404040',
  },
  goalText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: 'white',
  },
});

export default GoalItem;
