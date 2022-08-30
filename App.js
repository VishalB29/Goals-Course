import { StyleSheet, View, Button, FlatList, Alert, } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import Header from './header/Header';

const Stack = createNativeStackNavigator();

const MainScreen = () => {

  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const AddGoalHandler = (enteredGoalText) => {

    if (enteredGoalText != '') {
      setCourseGoal((currentCourseGoal) => [...currentCourseGoal, { text: enteredGoalText, id: Math.random().toString() },]);


    }
    else {
      Alert.alert("Blank field", "Please enter something")
    }
    setModalIsVisible(false)

  }
  const DeleteGoalHandler = (id) => {
    Alert.alert(
      "Delete Goal",
      "Are you sure you want to delete this Goal?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => setCourseGoal(currentCourseGoal => { return currentCourseGoal.filter((goal) => goal.id !== id) }) }
      ]
    );

  }

  function StartModalHandler() {
    setModalIsVisible(true)
  }

  function CancleGoalHandler() {
    setModalIsVisible(false)
  }


  return (

    <View style={styles.container}>
      <Button title='Click to Add Goal' onPress={StartModalHandler} />
      <GoalInput onAddGoal={AddGoalHandler} visible={modalIsVisible} onCancle={CancleGoalHandler} />
      <FlatList style={styles.goalContainer}
        data={courseGoal} renderItem={(dataItem) => { return <GoalItem text={dataItem.item.text} onDelete={DeleteGoalHandler} id={dataItem.item.id} /> }}
        keyExtractor={(item, index) => {
          return item.id

        }} />


    </View>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MS"
          component={MainScreen}
          options={{ headerTitle: () => <Header />, 
          headerStyle: {
            backgroundColor: "#5f9ea0",
          },}} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 25,
    justifyContent: 'center',
    backgroundColor: '#b7bfc9'
  },
  goalContainer:{
    paddingTop:15
  }
  


})