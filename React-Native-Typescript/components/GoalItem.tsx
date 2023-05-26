import { StyleSheet, Text, View } from 'react-native';
import { Goal } from '../App';

interface GoalItemProps {
  goal: Goal;
}

const GoalItem: React.FC<GoalItemProps> = ({ goal }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal.text}</Text>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
