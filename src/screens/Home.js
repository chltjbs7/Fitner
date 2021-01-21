import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';
import Youruber from '../components/Youtuber';

export default function HomeScreen() {
  const cardData = useSelector(state=>{
    return state
  })
  return (
    <ScrollView>
      <View style={{backgroundColor: "white"}}>
        <Header />
        <Text style={styles.strapline}>구독한 유튜버</Text>
        <Youruber />
        <Text style={styles.strapline}>시청 중인 동영상</Text>
        <Text style={styles.strapline}>맞춤 동영상</Text>
        <FlatList
        data={cardData}
        renderItem={({item})=>{
          return <Card
          videoId={item.id.videoId}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          />
        }}
      
        keyExtractor={item=>item.id.videoId}
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  strapline: {
    marginTop: '3%',
    marginLeft: '4.3%',
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: 'black',
  }, 
})