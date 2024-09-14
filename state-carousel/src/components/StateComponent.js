import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const StateComponent = ({ item }) => {
  const handlePress = () => {
    console.log('pressed!')
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.6}>
      <Text style={styles.text}>{item.state}</Text>
    </TouchableOpacity>
  )
}

export default StateComponent

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    width: 150,
    height: 90,
    borderRadius: 20,
    marginLeft: 30,
    marginVertical: 15,
    shadowColor: '#a9a9a9',
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 3 }
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: 14
  }
})