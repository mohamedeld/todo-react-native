import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ handleAddGoal, handleCloseModel, openModal }) => {

  const [goalText, setGoalText] = useState('');

  function goalTextHandler(newValue) {
    setGoalText(newValue)
  }

  function addGoal() {
    handleAddGoal(goalText)
    setGoalText('')
    handleCloseModel()
  }

  return (
    <Modal visible={openModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image}/>
        <TextInput style={styles.textInput} value={goalText} onChangeText={goalTextHandler} placeholder="Your course goal!" />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoal} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={handleCloseModel} color="#f31282"/>
          </View>
        </View>

      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#311b6b',
    marginBottom: 5,
  },
  image:{
    width:100,
    height:100,
    margin:20,

  },  
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    color:'#120438',
    backgroundColor:'#e4d0ff',
    width: '80%',
    borderRadius:6,
    padding: 8,
    marginBottom: 15
  },
  buttonsContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  button:{
    width:'30%'
  }
})