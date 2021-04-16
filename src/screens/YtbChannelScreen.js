import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const YtbChannel = ({navigation})=>{
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      }}>
      <View style={styles.Top}>
          <View style={{ flexDirection: "row" }}>
              <AntDesign name="arrowleft" size={24}
              style={{marginTop: 55, marginLeft: 16,}}
              onPress={()=>navigation.goBack()}
              />
              <Text style={styles.title}>Thankyou BUBU</Text>
          </View>
      </View>
      <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 20}} />
      <View>
        <TouchableOpacity style={styles.Channelart}></TouchableOpacity> 
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons name="account-circle" size={70} color="#6c5ce7" style={{marginLeft: 16, marginTop: 15}}/>
        <View style={{marginLeft: 16}}>
          <Text style={styles.ytbName}>Thankyou BUBU</Text>
          <Text style={styles.ytbInfo}>구독자 265만명</Text>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonName}>구독</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.VideoInfo}>동영상 목록(최신순)</Text>
      </View>
  </View>
  );
}

export default YtbChannel

const styles = StyleSheet.create({
  icon: {
    marginTop: 45,
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 55,
    marginLeft: 16,
},
  Channelart: {
    width: '100%',
    height: 105,
    backgroundColor: '#e8e8e8',
  },
  ytbName: {
    fontSize: 18,
    fontStyle: "normal",
    marginTop: 28,
  },
  ytbInfo: {
    fontSize: 12,
    fontStyle: "normal",
    color: '#8A8A8A',
    marginTop: 3
  },
  Button: {
    width: 75,
    height: 35,
    backgroundColor: '#6c5ce7',
    borderRadius: 30,
    marginTop: 28,
    marginLeft: 85,
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
    marginLeft: 16,
    marginTop: 31,
    marginBottom: 16
  }
});