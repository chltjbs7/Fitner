import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
 } from 'react-native';

export default function ViewScreen() {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.bigThumbnail_01} >
        <Image
          style={styles.bigThumbnail}
          source={require('./assets/thumbnail.png')}
        />
        <Image
          style={styles.bigProfile}
          source={require('./assets/profile.jpeg')}
        />
        <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
        <Text style={styles.textBigYtbName}>힙으뜸 · 조회수 1.5만회 · 1개월 전</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigThumbnail_02} >
        <Image
          style={styles.bigThumbnail}
          source={require('./assets/thumbnail.png')}
        />
        <Image
          style={styles.bigProfile}
          source={require('./assets/profile.jpeg')}
        />
        <Text style={styles.textBigName}>한 곳도 빠짐 없이 다 태우는 진짜 전신 유산소운동 + 근력 운동 ( 살 빠지는 운동 ) 홈트 | 레전드 전신...</Text>
        <Text style={styles.textBigYtbName}>발레테라핏 Ballet Thera Fit · 조회수 1.5만회 · 5개월 전</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigThumbnail_02} >
        <Image
          style={styles.bigThumbnail}
          source={require('./assets/thumbnail.png')}
        />
        <Image
          style={styles.bigProfile}
          source={require('./assets/profile.jpeg')}
        />
        <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
        <Text style={styles.textBigYtbName}>힙으뜸 · 조회수 1.5만회 · 1개월 전</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigThumbnail_02} >
        <Image
          style={styles.bigThumbnail}
          source={require('./assets/thumbnail.png')}
        />
        <Image
          style={styles.bigProfile}
          source={require('./assets/profile.jpeg')}
        />
        <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
        <Text style={styles.textBigYtbName}>힙으뜸 · 조회수 1.5만회 · 1개월 전</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bigThumbnail:{
    width: 382,
    height: 193,
    backgroundColor:'#e8e8e8',
    justifyContent: 'center',
  },
  textBigName: {
    width: 325,
    height: 40,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.07,
    textAlign: "left",
    color: 'black',
    marginTop: -35,
    marginLeft: 64,
  },
  textBigYtbName: {
    fontSize: 12,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: '#a2a2a2',
    marginLeft: 64,
    marginTop: -5,
  },
  bigProfile: {
    width: 32,
    height: 32,
    borderRadius: 100,
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 14,
  },
  bigThumbnail_01: {
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 16,
  },
  bigThumbnail_02: {
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 16,
  },
});