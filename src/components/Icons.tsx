import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import { Icon } from 'react-native-vector-icons/Icon'

type IconsProps=PropsWithChildren<{
    name:string
}>

const Icons = (name:string) => {
    
    switch (name) {
        case 'circle':
            return <Icon name='circle-thin' size={38} color={"green"}  />
            break;
    
            case 'cross':
            return <Icon name='times' size={38} color={"green"}  />
            break;
        default:
            return <Icon name='circle-thin' size={38} color={"green"}  />
            break;
    }
}

export default Icons

const styles = StyleSheet.create({})