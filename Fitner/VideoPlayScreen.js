import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import ViewScreen from './ViewScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
       <Image
          style={styles.Video}
          source={require('./assets/thumbnail.png')}
        />
      </View>

      <View style={styles.Mid}>
       <Text style={styles.VideoTag}>#cardioworkout #층간소음없는유산소 #전신유산소운동</Text>
       <Text style={styles.VideoName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
       <Text style={styles.VideoInfo}>조회수 1.5만회 · 1개월 전</Text>

       <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonName}>재생목록에 이 동영상 추가</Text>
        </TouchableOpacity>

        <View style={styles.verticleLine}></View>

         <View style={styles.Box}>
           <Image
             style={styles.Profile}
              source={require('./assets/profile.jpeg')}
            />
          <View>
            <TouchableOpacity>
              <Text style={styles.VideoName}>힙으뜸</Text>
              <Text style={styles.VideoInfo}>구독자 84.8만명</Text>
            </TouchableOpacity>  
          </View>
          
          <TouchableOpacity><Text style={styles.SubsButton}>구독</Text></TouchableOpacity>
         </View>
         <View style={styles.verticleLine}></View> 
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
    backgroundColor: '#ffffff'
  },
  Mid: {
    backgroundColor: '#ffffff',
    
  },
  Video: {
    width: '100%',
    height: 211,
  },
  VideoTag: {
    fontSize: 12,
    fontStyle: "normal",
    color: '#EE9090',
    marginTop: 16,
    marginLeft: 16,
  },
  VideoName: {
    fontSize: 18,
    fontStyle: "normal",
    color: '#000000',
    marginLeft: 16,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 16,
    lineHeight: 22,
  },
  VideoInfo: {
    fontSize: 14,
    fontStyle: "normal",
    color: '#8A8A8A',
    marginLeft: 16,
  },
  Button: {
    width: 199,
    height: 40,
    backgroundColor: '#EE9090',
    borderRadius: 30,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: '25%'
  },
  ButtonName: {
    fontSize: 14,
    fontStyle: "normal",
    color: '#fff',
    marginLeft: 28,
    marginTop: 11,
  },
  verticleLine:{
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
    marginTop: 5,  
  },
  Box: {
    flexDirection: 'row',
  },
  Profile: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginLeft: 16,
    marginTop: 10,
  },
  SubsButton: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    color: '#6c5ce7',
    marginRight: 16,
    marginLeft: 210,
    marginTop: 18,
  }
});
