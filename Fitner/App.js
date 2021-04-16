import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (

      <View style={styles.container}>
      <View style={styles.Top}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.Screentitle}>세부 피드백</Text>
      </View>
      <View style={styles.verticleLine}></View>

      <ScrollView>
      <View style={styles.Mid}>
      <Text style={styles.text_01}>동작 유사도 결과</Text>
      
      <View style={styles.box}>
        <View style={styles.mImage01}></View>
        <View style={styles.mImage02}></View>
      </View>

      <Text style={styles.text_02}>영상의 5분 20초에서 ~25초 사이의</Text>
      <Text style={styles.text_03}>유사도 90%</Text>


      <Text style={styles.text_01}>가장 낮은 유사도 결과</Text>

      <View style={styles.box}>
        <TouchableOpacity style={styles.mImage01}></TouchableOpacity>
        <TouchableOpacity style={styles.mImage02}></TouchableOpacity>
      </View>

      <Text style={styles.text_02}>영상의 8분 12초에서 ~ 17초 사이의</Text>
      <Text style={styles.text_03}>유사도 45%</Text>

      </View>
      </ScrollView>
    </View>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Top: {
    backgroundColor: '#ffffff',
    flexDirection: "row",
  },
  Mid: {
    flex: 7,
    backgroundColor: '#ffffff',
  },
  icon: {
    marginTop: 45,
    marginLeft: 16,
    marginRight: 16,
  },
  verticleLine:{
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  Screentitle: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 46,
    marginBottom: 20,
    color: '#6c5ce7',
    fontWeight: 'bold'
  },
  text_01: {
    marginLeft: 16,
    marginTop: 35,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    color: '#0a0a0a'
  },
  text_02: {
    alignContent: 'flex-end',
    marginLeft: 140,
    marginTop: 6,
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 28,
    color: '#0a0a0a'
  },
  text_03: {
    alignContent: 'flex-end',
    marginLeft: 282,
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    color: '#6c5ce7'
  },
  box: {
    flexDirection: 'row',
  },
  mImage01: {
    width: 183,
    height: 183,
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
    marginLeft: 16
  },
  mImage02: {
    width: 183,
    height: 183,
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
    marginLeft: 16
  },
});
