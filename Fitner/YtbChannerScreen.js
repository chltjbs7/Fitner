import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
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
      <Text style={styles.title}>Thankyou BUBU</Text>
    </View>
    <View style={styles.verticleLine}></View>

    <View style={styles.Mid}>
      <TouchableOpacity style={styles.Channelart}></TouchableOpacity> 

      <View style={styles.box}>
        <Image
          style={styles.Profile}
          source={require('./assets/profile.jpeg')}
        />
        <View>
          <Text style={styles.ytbName}>Thankyou BUBU</Text>
          <Text style={styles.ytbInfo}>구독자 265만명</Text>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonNmae}>구독</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.Content}>
    <Text style={styles.VideoInfo}>동영상 목록(최신순)</Text>
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
    flex: 2,
    backgroundColor: '#ffffff',
  },
  Content: {
    flex: 5,
    marginTop: 16,
  },
  icon: {
    marginTop: 45,
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 45,
    marginLeft: 16,
  },
  Channelart: {
    width: '100%',
    height: 105,
    backgroundColor: '#e8e8e8',
  },
  Profile: {
    width: 70,
    height: 70,
    borderRadius: 100,
    margin: 16,
  },
  box: {
    flexDirection: "row",
  },
  ytbName: {
    fontSize: 18,
    fontStyle: "normal",
    marginTop: 28,
  },
  ytbInfo: {
    fontSize: 12,
    fontStyle: "normal",
    color: '#8A8A8A'
  },
  Button: {
    width: 75,
    height: 35,
    backgroundColor: '#6c5ce7',
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 90,
  },
  ButtonNmae: {
    fontSize: 16,
    fontStyle: "normal",
    color: '#ffffff',
    textAlign: "center",
    marginTop: 10,
  },
  VideoInfo: {
    fontSize: 14,
    fontStyle: "normal",
    margin: 16,
    marginBottom: 5,
  }
});
