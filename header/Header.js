import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#5f9ea0' />
      <Text style={styles.headerText}>Goals Course</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight:25,
        alignItems:'center'
      },
    headerText: {
        fontSize: 22,
        fontWeight:'700',
        color:'black'
      },
})