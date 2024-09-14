import { StyleSheet, Text, View, FlatList, StatusBar, SafeAreaView, Dimensions } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { getStates } from '../api'
import StateComponent from './StateComponent'
import Pagination from './Pagination'

const WIDTH = Dimensions.get('window').width;

const Carousel = () => {
  const [states, setStates] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0); // keeps track of current carousel slide
  const carouselRef = useRef(null);

  // fetches data from "/api/states" endpoint
  useEffect(() => {
    getStates()
      .then((res) => {
        setStates(res.data);
      })
      .catch((err) => {
        console.error('Error fetching states:', err);
      });
  }, []);

  const handleScroll = (e) => {
    const xOffset = e.nativeEvent.contentOffset.x;
    const newIdx = Math.round(xOffset / WIDTH); // compute new index based on scroll offset

    // loop to starting dot when scroll reaches end
    const newArrIdx = newIdx % states.length;
    setCurrentIdx(newArrIdx);
  }
  
  const numDots = 7; // can be changed

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={states}
        renderItem = {({ item }) => <StateComponent item={item}/>}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        ref={carouselRef}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <View style={styles.paginationContainer}>
        <Pagination currentIdx={currentIdx} numDots={numDots}/>
      </View>
    </SafeAreaView>
  )
}

export default Carousel

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  paginationContainer: {
    alignItems: 'center',
  }
})