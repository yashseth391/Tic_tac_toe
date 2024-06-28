import React from 'react'
import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconsProps) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle" size={38} color="#F7CD2E" />
        break;
    case 'cross':
        return <Icon name="dangerous" size={38} color="#38CC77" />
        break;
  
    default:
      return <Icon name="border-color" size={38} color="white" />

  }
}

export default Icons