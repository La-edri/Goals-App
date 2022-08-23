import { useState } from 'react'
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';



function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');

      }
    
    return(
    <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
         style={styles.textInput}
         placeholder="  Your Course Goal!"
         onChangeText={goalInputHandler}
         value={enteredGoalText}
         />
         <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal!" onPress={addGoalHandler} color='#b180f0' /> 
          </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={props.onCancel} color='#f31282' /> 
        </View>
        </View>
      </View>
    </Modal>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor:'#311b6b', 
        justifyContent: 'center',
        alignItems:'center',
        paddingBottom: 20,
        
      },
      image:{
        width:100,
        height:100,
        margin:20

      },
      textInput:{
        borderWidth:3,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width:'95%',
        marginRight: 1,
        padding: 8,
    
      },
      buttonContainer: { 
        flexDirection: "row",
        padding: 30,
      
      },
      button: {
        width:"40%",
        marginHorizontal: 8,
      },

});