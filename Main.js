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

import SubscribedYoutuber from './Home/Youtuber';
import Watching from './Home/Watching';
import Fit from './Home/Fit';

import { FontAwesome, } from '@expo/vector-icons';

const {width: WIDTH} = Dimensions.get('window')
export default class Home_01 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.Top}>
          <Text style={styles.fintnerLogo}>Finter</Text>

          <Text style={styles.info}>
            abc123님
            {'\n'}운동하기 딱 좋은 날이네요.
            {'\n'}오늘도 화이팅!
          </Text>

          <TextInput
            style={styles.searchBar}
            placeholder={'검색어를 입력하세요.'}
            placeholderTextColor={'#9f9f9f'}
            underlineColorPhone='transpatren'
          />
          <TouchableOpacity>
            <FontAwesome name={'search'} size={20} color={'#525252'} style={styles.inputIcon}/>
          </TouchableOpacity>
        </View>

        <View style={styles.Mid}>
          <Text style={styles.strapline}>
            {'\n'}    구독한 유튜버
          </Text>
          <SubscribedYoutuber />

          <Text style={styles.strapline}>
            {'\n'}    시청 중인 동영상
          </Text>
          <TouchableOpacity>
            <Text style={styles.wideScreen}>전체보기</Text>
          </TouchableOpacity>
          <Watching />

          <Text style={styles.strapline}>
            {'\n'}    맞춤 동영상
          </Text>
          <Fit />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Top: {
    flex: 1,
    backgroundColor: '#6c5ce7',
  },
  Mid: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  fintnerLogo: {
    fontSize: 28,
    color:'white',
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 41,
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 50,
    marginLeft: 15,
  },
  info: {
    fontSize: 22,
    fontWeight: "500",
    fontStyle: 'normal',
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
    marginTop: 30,
    marginLeft: 15,
  },
  searchBar: {
    marginTop: 40,
    marginLeft: 55,
    width: 300,
    height: 40,
    borderRadius: 40,
    fontSize: 16,
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    color: '#9f9f9f',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'relative',
    top: -31,
    left: 320,
  },
  wideScreen: {
    color: '#8a8a8a',
    fontSize: 12,
    textAlign: 'right',
    lineHeight: 14,
    marginTop: -15,
    marginRight: 15,
  },
  strapline: {
    fontSize: 18,
    color:'#0a0a0a',
    lineHeight: 28,
  },
});