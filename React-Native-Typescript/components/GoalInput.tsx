import { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface GoalInputProps {
  onAddGoal: (text: string) => void;
}

const GoalInput: React.FC<GoalInputProps> = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal!"
        value={enteredGoalText}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={addGoalHandler}>
        <Text style={styles.button}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 8,
  },
  buttonContainer: {},
  button: {
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 13, // Add vertical padding
    paddingHorizontal: 20, // Add horizontal padding
    borderRadius: 3,
  },
});
