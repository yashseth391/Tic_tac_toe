import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Interfacefile = () => {
  const start= () => (
    <Icon name="close" size={38}  />
  )

  const player0= () =>
    (
      <Icon name="close" size={38} color="green" />
    )
  const[icon1,setIcon1]=useState(player0());
  const[icon2,setIcon2]=useState(start());
  const[icon3,setIcon3]=useState(start());
  const[icon4,setIcon4]=useState(start());
  const[icon5,setIcon5]=useState(start());
  const[icon6,setIcon6]=useState(start());
  const[icon7,setIcon7]=useState(start());
  const[icon8,setIcon8]=useState(start());
  const[icon9,setIcon9]=useState(start());
  const [playerTurn,setPlayerTurn] =useState("Player 1's turn");

  const action=() => {
    if(playerTurn=="Player 1's turn")
      {
        setIcon1(player0());
        setPlayerTurn("Player 2's turn");
      }
      
  }

  return (
    <View style={styles.container}>
     <View style={styles.firstrow}>
        <Pressable onPress={action}>
          {icon1}
        </Pressable>
        <Pressable>
        {icon2}
        </Pressable>
        <Pressable>
        {icon3}
        </Pressable>
        
        

     </View>
     <View style={styles.secondrow}>
        <Pressable>
          {icon4}
        </Pressable>
        <Pressable>
        {icon5}
        </Pressable>
        <Pressable>
        {icon6}
        </Pressable>
     </View>
     <View style={styles.thirdrow}>
        <Pressable>
          {icon7}
        </Pressable>
        <Pressable>
        {icon8}
        </Pressable>
        <Pressable>
        {icon9}
        </Pressable>

     </View>
    
    </View>
  )
}

export default Interfacefile

const styles = StyleSheet.create({
  container:{
    margin:20,

  },
  firstrow:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  secondrow:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  thirdrow:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
})