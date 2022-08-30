import { StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'
import React, { useState } from 'react'



const GoalInput = (props) => {
    
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const GoalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const AddGoalHandler = () => {
        props.onAddGoal(enteredGoalText)

        setEnteredGoalText('')
        
    }
    const CancleGoalHandler = () => {
        props.onCancle()
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    value={enteredGoalText}
                    defaultValue=''
                    style={styles.inputText} placeholder='Enter your goal' onChangeText={GoalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color='blue' title='Add Goal' onPress={AddGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button color='red' title='Cancle' onPress={CancleGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#5f9ea0'
    },
    inputText: {
        width: '100%',
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        backgroundColor: 'grey'
    },
    buttonContainer: {
        flexDirection:'row',
        paddingTop:10
    },
    button: {
        padding:10,
        width:'40%',
    },
    image:{
        height:100,
        width:100,
        margin:20
    }
    
    
})