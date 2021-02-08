import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

import MiniViewScreen01 from './MiniViewScreen01';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.Top}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.box}>
        <Text style={styles.title}>30일 홈트레이닝 루틴</Text>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={24} style={styles.editicon} />
        </TouchableOpacity>
        </View>
        
        <Text style={styles.info}>2020.12.24 · 동영상 5개</Text>

        {/* 재생 버튼 */}
        <TouchableOpacity style={styles.play}>
          <MaterialIcons name="play-arrow" size={24} style={styles.playicon} />
        </TouchableOpacity>
      </View>

      <View style={styles.Mid}>
        {/* 편집 버튼 */}
        <TouchableOpacity>
          <Text style={styles.edit}>편집</Text>
        </TouchableOpacity>
        <MiniViewScreen01 />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Top: {
    flex: 3,
    backgroundColor: '#e8e8e8',
  },
  Mid: {
    flex: 7,
    backgroundColor: '#ffffff',
  },
  box: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 45,
    marginLeft: 16,
  },
  editicon: {
    marginTop: 60,
    marginLeft: 5,
    color: '#8a8a8a',
  },
  title: {
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: '4.3%',
    color: '#0a0a0a',
  },
  info: {
    fontSize: 14,
    fontStyle: "normal",
    marginTop: 7,
    marginLeft: '4.3%',
    color: '#0a0a0a',
  },
  edit: {
    fontSize: 16,
    fontStyle: "normal",
    marginTop: 14,
    marginBottom: 14,
    marginLeft: '88%',
    color: '#8a8a8a',
  },
  play: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 100,
    right: 16,
    bottom: 40,
    backgroundColor: '#6c5ce7',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  playicon: {
    margin: '26%',
    color: '#ffffff',
  },
});
