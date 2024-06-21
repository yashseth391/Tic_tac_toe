import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Interfacefile = () => {
  const start= () => (
    <Icon name="pencil" size={50}  color={'#522224'}/>
  )
  const[icon1,setIcon1]=useState(start());
  const[icon2,setIcon2]=useState(start());
  const[icon3,setIcon3]=useState(start());
  const[icon4,setIcon4]=useState(start());
  const[icon5,setIcon5]=useState(start());
  const[icon6,setIcon6]=useState(start());
  const[icon7,setIcon7]=useState(start());
  const[icon8,setIcon8]=useState(start());
  const[icon9,setIcon9]=useState(start());

  return (
    <View style={styles.container}>
     <View style={styles.firstrow}>
        {icon1}
        {icon2}
        {icon3}

     </View>
     <View style={styles.secondrow}>
        {icon1}
        {icon2}
        {icon3}

     </View>
     <View style={styles.thirdrow}>
        {icon1}
        {icon2}
        {icon3}

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