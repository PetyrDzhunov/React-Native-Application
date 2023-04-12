import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Click me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    backgroundColor: 'red',
    color: 'white',
    margin: 16,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 3,
  },
});
