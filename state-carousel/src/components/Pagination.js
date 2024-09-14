import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pagination = ({ currentIdx, numDots }) => {
  const dots = [];

  // show 5 dots at a time
  // once user reaches last dot, loop back to starting dot
  for (let i = 0; i < numDots; i++) {
    const isActive = i === currentIdx % numDots;
    dots.push(
      <View 
        key={i.toString()}
        style={[styles.dot, isActive ? styles.activeDot : styles.inactiveDot]}
      />
    )
  }

  return (<View style={styles.container}>{dots}</View>)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    borderRadius: 5,
    width: 10,
    height: 10,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  inactiveDot: {
    backgroundColor: '#dcdcdc',
  },
})

export default Pagination