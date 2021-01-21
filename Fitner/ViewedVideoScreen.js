import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import MiniViewScreen from './MiniViewScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>시청기록</Text>
      </View>
      <View style={styles.verticleLine}></View>

      <View style={styles.Mid}>
        <Text style={styles.ViewTime}>어제</Text>
        <MiniViewScreen />
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
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: "row",
  },
  Mid: {
    flex: 7,
    backgroundColor: '#ffffff',
    
  },
  icon: {
    marginTop: 42,
    marginLeft: 16,
    marginRight: 16,
  },
  verticleLine:{
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 45,
    color: '#6c5ce7',
    fontWeight: 'bold'
  },
  ViewTime: {
    fontSize: 16,
    fontStyle: "normal",
    margin: 16,
    color: '#8a8a8a',
  }
});
