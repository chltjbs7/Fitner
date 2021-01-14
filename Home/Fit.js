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
      <View>
          <TouchableOpacity style={styles.bigThumbnail_01} >
           <TouchableOpacity style={styles.bigThumbnail}/>
            <TouchableOpacity style={styles.bigProfile}/>
            <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
            <Text style={styles.textBigYtbName}>힙으뜸 · 조회수 1.5만회 · 1개월 전</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bigThumbnail_02} >
           <TouchableOpacity style={styles.bigThumbnail}/>
            <TouchableOpacity style={styles.bigProfile}/>
            <Text style={styles.textBigName}>한 곳도 빠짐 없이 다 태우는 진짜 전신 유산소운동 + 근력 운동 ( 살 빠지는 운동 ) 홈트 | 레전드 전신...</Text>
            <Text style={styles.textBigYtbName}>발레테라핏 Ballet Thera Fit · 조회수 1.5만회 · 5개월 전</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bigThumbnail_03} >
           <TouchableOpacity style={styles.bigThumbnail}/>
            <TouchableOpacity style={styles.bigProfile}/>
            <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
            <Text style={styles.textBigYtbName}>힙으뜸 · 조회수 1.5만회 · 1개월 전</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bigThumbnail_04} >
           <TouchableOpacity style={styles.bigThumbnail}/>
            <TouchableOpacity style={styles.bigProfile}/>
            <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
            <Text style={styles.textBigYtbName}>힙으뜸 · 조회수 1.5만회 · 1개월 전</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigThumbnail:{
    width: 393,
    height: 193,
    backgroundColor:'#e8e8e8',
    justifyContent: 'center',
    marginTop: -5,
  },
  bigThumbnail_01: {
    width: 393,
    height: 253,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  bigThumbnail_02: {
    width: 393,
    height: 253,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  bigThumbnail_03: {
    width: 393,
    height: 253,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  bigThumbnail_04: {
    width: 393,
    height: 253,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  textBigName: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 14,
    marginTop: -30,
    marginLeft: 50,
  },
  textBigYtbName: {
    color: '#a2a2a2',
    fontSize: 12,
    textAlign: 'left',
    lineHeight: 20,
    marginTop: 5,
    marginLeft: 50,
  },
  bigProfile: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: '#9b90ee',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
});