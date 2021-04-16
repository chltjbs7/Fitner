import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
 } from 'react-native';

import { MaterialIcons, } from '@expo/vector-icons';

export default function Youtuber() {
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
            <Text style={styles.text}>◀</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_01}>
          <MaterialIcons name="account-circle" size={60} color="#6c5ce7" style={styles.profile}/>
            <Text style={styles.textYouYuber}>땅끄부부</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_02}>
            <MaterialIcons name="account-circle" size={60} color="#6c5ce7" style={styles.profile}/>
            <Text style={styles.textYouYuber}>힙으뜸</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_03}>
            <MaterialIcons name="account-circle" size={60} color="#6c5ce7" style={styles.profile}/>
            <Text style={styles.textYouYuber}>발레테라핏</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnYoutuber_04}>
            <MaterialIcons name="account-circle" size={60} color="#6c5ce7" style={styles.profile}/>
            <Text style={styles.textYouYuber}>피지컬 갤러리</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnPlus: {
    width: 42,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
    marginTop: 10,
    marginLeft: 16,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#9b90ee',
    textAlign: 'center',
    fontWeight: "bold",
  },
  btnYoutuber_01: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 68,
  },
  btnYoutuber_02: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 165,
  },
  btnYoutuber_03: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 262,
  },
  btnYoutuber_04: {
    width: 87,
    height: 118,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: 'center',
    marginTop: -118,
    marginLeft: 358,
  },
  textYouYuber:{
    color: '#0a0a0a',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 14,
    marginTop: 8,
  },
  profile: {
    marginTop: 8,
    marginLeft: 13,
  },
});