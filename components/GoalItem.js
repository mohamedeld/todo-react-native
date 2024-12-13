import { Pressable, StyleSheet, Text, View } from "react-native"

const GoalItem = ({ goal, handleRemove }) => {

  return (
    <View key={goal?.id} style={styles.goalItem}>
      <Pressable onPress={() => handleRemove(goal?.id)} android_ripple={{color:'#210644'}} style={({pressed})=> pressed && styles.itemPress }>
        <Text style={styles.goalItemText}>{goal?.text}</Text>
      </Pressable>
    </View>

  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0ecc',

    padding: 8
  },
  goalItemText: {
    color: '#fff',
  },
  itemPress:{
    opacity:0.7
  }
})