import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'



const Headerfile = () => {

    const [playerTurn,setPlayerTurn] =useState("Player 0's turn");
  return (
    <View style={styles.container}>
      <Text style={styles.turnText}> {playerTurn}   </Text>
    </View>
  )
}

export default Headerfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        margin:10,
        height:45,

    },
    turnText:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center',
        fontSize:26,
    }
})