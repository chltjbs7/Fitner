import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { FontAwesome, } from '@expo/vector-icons';

export default class MyPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Top}>
          <TouchableOpacity style={styles.profile}/>
          <Text style={styles.id}>abc123님</Text>
        </View>
        <View style={styles.Mid}>
          <View>
            <Text style={styles.title}>내 Fitner</Text>
            <TouchableOpacity>
              <Text style={styles.text}>구독한 유튜버</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>시청 기록</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>재생 목록</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>환경설정</Text>
            <TouchableOpacity>
              <Text style={styles.text}>알림설정</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>고객지원</Text>
            <TouchableOpacity>
              <Text style={styles.text}>로그아웃</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>탈퇴하기</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>앱 정보</Text>
            <TouchableOpacity>
              <Text style={styles.text}>이용약관</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>오픈소스 라이선스</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Top: {
    flex: 1,
    backgroundColor: '#6c5ce7',
  },
  Mid: {
    flex: 4,
    backgroundColor: '#ffffff',
  },
  id: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: 'white',
    marginLeft: 100,
    marginTop: -40
  },
  profile: {
    width: 56,
    height: 54,
    borderRadius: 100,
    backgroundColor: '#9b90ee',
    justifyContent: 'center',
    marginTop: 80,
    marginLeft: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: '#6c5ce7',
    marginTop: 15,
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: 'black',
    marginTop: 15,
    marginLeft: 33,
  },
});