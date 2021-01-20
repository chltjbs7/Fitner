import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import ViewScreen from './ViewScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>전신</Text>
      </View>
      <View style={styles.verticleLine}></View>
      <View style={styles.Mid}>
        <ViewScreen />
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
    marginTop: 45,
    marginLeft: 16,
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
    marginLeft: 155,
  }
});
