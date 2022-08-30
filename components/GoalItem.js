import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id) }>
      <View style={styles.goalContainer}>
        <Text style={styles.goalItem}>{props.text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    padding: 12,
    backgroundColor: 'cyan',
    color:'black'
  },
  goalContainer: {
    flex: 5
  }
})