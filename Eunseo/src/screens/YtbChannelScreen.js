import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function YtbChannel ({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.Top}>
      <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} style={styles.icon} onPress={()=>navigation.goBack()} />
      </TouchableOpacity>
      <Text style={styles.title}>Thankyou BUBU</Text>
    </View>
    <View style={styles.verticleLine}></View>

    <View style={styles.Mid}>
      <TouchableOpacity style={styles.Channelart}></TouchableOpacity> 

      <View style={styles.box}>
        <MaterialIcons name="account-circle" size={70} color="#6c5ce7" style={{margin: 16}}/>
        <View>
          <Text style={styles.ytbName}>Thankyou BUBU</Text>
          <Text style={styles.ytbInfo}>구독자 265만명</Text>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonName}>구독</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.Content}>
    <Text style={styles.VideoInfo}>동영상 목록(최신순)</Text>
      
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
  ButtonName: {
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
  }
});