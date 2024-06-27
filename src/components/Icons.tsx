import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';

type IconsProps=PropsWithChildren<{
    name:string
}>

const Icons = (name:string) => {
    console.log("Hello i am in icons");
    switch (name) {
        
        case 'circle':
            return <Icon name='circle' size={38} color={"green"}  />
            
    
            case 'cross':
            return <Icon name='dangerous' size={38} color={"green"}  />
            
        default:
            return <Icon name='border-color' size={44} color={"white"}  />
            
    }
}

export default Icons

const styles = StyleSheet.create({})