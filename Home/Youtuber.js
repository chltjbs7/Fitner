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
          <TouchableOpacity style={styles.btnPlus}>
            <Text style={styles.text}>◁</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_01}>
            <TouchableOpacity style={styles.profile}/>
            <Text style={styles.textYouYuber}>땅끄부부</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_02}>
            <TouchableOpacity style={styles.profile}/>
            <Text style={styles.textYouYuber}>힙으뜸</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_03}>
            <TouchableOpacity style={styles.profile}/>
            <Text style={styles.textYouYuber}>발레테라핏</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_04}>
            <TouchableOpacity style={styles.profile}/>
            <Text style={styles.textYouYuber}>피지컬 갤러리</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btnPlus: {
    width: 42,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 15,
  },
  btnYoutuber_01: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 70,
  },
  btnYoutuber_02: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 170,
  },
  btnYoutuber_03: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 270,
  },
  btnYoutuber_04: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 370,
  },
  text: {
    color: '#9b90ee',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
  },
  textYouYuber:{
    color: '#0a0a0a',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 14,
    marginTop: 10,
  },
  profile: {
    width: 56,
    height: 54,
    borderRadius: 100,
    backgroundColor: '#9b90ee',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 15,
  },
});