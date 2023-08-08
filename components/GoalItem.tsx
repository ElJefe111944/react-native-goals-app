import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GoalItemProps {
  text: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ text }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
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
