import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import  {Icon}  from 'react-native-vector-icons/Icon'

type IconsProps =PropsWithChildren<{
    name:string
}>


const Icons = (name  :string) => {
  switch(name)
  {
    case 'circle':
        return <Icon name="circle-thin" size={38} color={"green"}   />

  }
}

export default Icons

const styles = StyleSheet.create({})