import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

//%ED%99%88%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D = "홈트레이닝"

export default function HomeScreen() {
  const cardData = useSelector(state=>{
    return state
  })
  return (
    <View style={{backgroundColor: "white"}}>
      <Text style={styles.strapline}>맞춤 동영상</Text>
      <FlatList
      data={cardData}
      renderItem={({item})=>{
        return <Card
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        time={item.snippet.publishTime}
        />
      }}
    
      keyExtractor={item=>item.id.videoId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  strapline: {
    marginTop: 24,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: 'black',
  }, 
})