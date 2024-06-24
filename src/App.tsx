import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import Icons from './components/Icons'
import { array } from 'yup'


const App = () => {
  const [isCross,setIsCross]=useState(false)
  const [gameWinner,setGameWinner]=useState('')
  const [gameState,setGameState]=useState(new Array(9).fill('empty',0,9))

  const reloadGame=() => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty',0,9));
}
const checkIsWinner=() => {
  if(gameState[0]!=='empty' && gameState[0]===gameState[1] && gameState[1]===gameState[2])
    {
      setGameWinner(`${gameState[0]} won the game 🥳🥳`);
    }
    else if(gameState[3]!=='empty' && gameState[3]===gameState[4] && gameState[4]===gameState[5])
      {
        setGameWinner(`${gameState[3]} won the game 🥳🥳`);
      }
    else if(gameState[6]!=='empty' && gameState[7]===gameState[8] && gameState[7]===gameState[6])
      {
        setGameWinner(`${gameState[6]} won the game 🥳🥳`);
      }
      else if(gameState[0]!=='empty' && gameState[0]===gameState[3] && gameState[3]===gameState[6])
      {
        setGameWinner(`${gameState[0]} won the game 🥳🥳`);
      }
      else if(gameState[1]!=='empty' && gameState[7]===gameState[4] && gameState[1]===gameState[4])
      {
        setGameWinner(`${gameState[1]} won the game 🥳🥳`);
      }
      else if(gameState[2]!=='empty' && gameState[5]===gameState[2] && gameState[5]===gameState[8])
      {
        setGameWinner(`${gameState[2]} won the game 🥳🥳`);
      }
      else if(gameState[0]!=='empty' && gameState[4]===gameState[8] && gameState[0]===gameState[4])
      {
        setGameWinner(`${gameState[0]} won the game 🥳🥳`);
      }
      else if(gameState[2]!=='empty' && gameState[4]===gameState[6] && gameState[2]===gameState[4])
       {
        setGameWinner(`${gameState[2]} won the game 🥳🥳`);
      }
      
  
  

}
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})