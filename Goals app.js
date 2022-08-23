import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" />
        <Button title="Add Goal!"/>
      </View>
      <View>
        <Text>List of goals..</Text> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 55,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput:{
    borderWidth:2,
    borderColor: "#cccccc",
    width:'70%',
    marginRight: 8
  }
});