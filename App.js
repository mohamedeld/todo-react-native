import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [openModal,setOpenModal] = useState(false)
  const [goals, setGoals] = useState([]);

  
  function handleAddGoal(goalText) {
    if (goalText.trim().length === 0) return;
    setGoals(prev => [...prev, {text:goalText,id:Math.random().toString()}]);
   
  }

  function handleOpenModel(){
    setOpenModal(true)
  }
  function handleCloseModel(){
    setOpenModal(false)
  }

  function handleRemove(id){
    console.log("id",id)
    setGoals(prev=> prev?.filter(item => item?.id !== id));
  }

  return (
    <>
      <View style={styles.appContainer}>
      <Button title="Add Goal" color="#5e0acc" onPress={handleOpenModel}/>
     <GoalInput handleAddGoal={handleAddGoal} handleCloseModel={handleCloseModel} openModal={openModal}/>
      <View style={styles.goalContainer}>
        <FlatList data={goals} renderItem={({item})=>{
          return (
            <GoalItem goal={item} handleRemove={handleRemove}/>
          )
        }} keyExtractor={(item)=>{
          return item?.id
        }} />
      </View>
    </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal: 16,
    flex: 1
  },
  
  
  goalContainer: {
    flex: 6
  },
 

});
