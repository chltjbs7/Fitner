import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { FontAwesome, } from '@expo/vector-icons';
export default class Home_01 extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator = {true}
        onMomentumScrollEnd ={
            () => {console.log('Scrolling is End')}
        }
      >
        <View>
          <TouchableOpacity>
            <Text style={styles.wideScreen}>전체보기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.thumbnail_01} >
           <TouchableOpacity style={styles.thumbnail}/>
            <Text style={styles.textName}>Full body workout 50min | 살찐 {'\n'}분들 들어오세요! 전신운동...</Text>
            <Text style={styles.textYtbName}>힙으뜸</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.thumbnail_02} >
           <TouchableOpacity style={styles.thumbnail}/>
            <Text style={styles.textName}>[Playing Pilates] 매트 전신운동 {'\n'}23 min★Full Body Mat ...</Text>
            <Text style={styles.textYtbName}>Plying Pilates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.thumbnail_03} >
           <TouchableOpacity style={styles.thumbnail}/>
            <Text style={styles.textName}>[Playing Pilates] 매트 전신운동 {'\n'}23 min★Full Body Mat...</Text>
            <Text style={styles.textYtbName}>발레테라핏</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wideScreen: {
    color: '#8a8a8a',
    fontSize: 12,
    textAlign: 'right',
    lineHeight: 14,
    marginTop: -15,
    marginRight: 15,
  },
  thumbnail: {
    width: 160,
    height: 90,
    backgroundColor:'#e8e8e8',
    justifyContent: 'center',
    marginTop: -5,
  },
  thumbnail_01: {
    width: 160,
    height: 140,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  thumbnail_02: {
    width: 160,
    height: 140,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: -140,
    marginLeft: 180,
  },
  thumbnail_03: {
    width: 160,
    height: 140,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: -140,
    marginLeft: 350,
  },
  textName: {
    color: '#0a0a0a',
    fontSize: 12,
    textAlign: 'left',
    lineHeight: 14,
    marginTop: 5,
  },
  textYtbName: {
    color: '#8a8a8a',
    fontSize: 12,
    textAlign: 'left',
    lineHeight: 14,
    marginTop: 5,
  },
});