import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons'; 

import DayChart from './DayChart';

const Day = ()=>{
  const navigation = useNavigation()
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: "white"}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-left" size={24} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.detaildate}>1월 28일 목요일</Text>
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-right" size={24} style={styles.icon} />
                </TouchableOpacity>     
            </View>
            {/* 그래프 */}
            <DayChart />
            <Text style={styles.text_01}>오늘의 운동 피드백</Text>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Text style={styles.text_02}>총 운동시간</Text>
                    <Text style={styles.text_03}>30분</Text>
                </View>
                <View>
                    <Text style={styles.text_02}>완료한 영상</Text>
                    <Text style={styles.text_03}>3개</Text>
                </View>
                <View>
                    <Text style={styles.text_02}>전날 대비 운동량</Text>
                    <Text style={styles.text_03}>+ 20분</Text>
                </View>             
            </View>
            {/* 동작 유사도 */}
            <Text style={styles.text_01}>운동한 영상 별 동작 유사도</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginLeft: 16}} onPress={()=>navigation.navigate("Feedback")}>
                <View style={styles.screen} />
                <Text style={styles.percent}>80%</Text>
                <Text style={styles.title}>[Playing Pilates] 매트 전신운동 23 min★Full Body...</Text>
                <Text style={styles.youtuber}>Playing Pilates</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 16}}>
                <View style={styles.screen} />
                <Text style={styles.percent}>95%</Text>
                <Text style={styles.title}>Full body workout 50min | 살 찐 분들 들어오세요! 전...</Text>
                <Text style={styles.youtuber}>힙으뜸</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginLeft: 16, marginTop: 30}}>
                <View style={styles.screen} />
                <Text style={styles.percent}>80%</Text>
                <Text style={styles.title}>살 쭉쭉 빠지는 유산소운동 홈트 (땀폭발) // 죽음의 타바...</Text>
                <Text style={styles.youtuber}>Thankyou BUBU</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 16, marginTop: 30}}>
                <View style={styles.screen} />
                <Text style={styles.percent}>95%</Text>
                <Text style={styles.title}>[체지방킬러:고독한 유산소 운동] 층간소음 걱정 1도 ...</Text>
                <Text style={styles.youtuber}>힙으뜸</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    )
}

export default Day

const styles = StyleSheet.create({
  icon: {
    margin: 16,
  },
  detaildate: {
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    marginTop: 19,
    marginLeft: 99,
    marginRight: 99,
    color: '#9b90ee'
  },
  text_01: {
    marginLeft: 16,
    marginTop: 45,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    color: '#0a0a0a'
  },
  text_02: {
    marginLeft: 16,
    marginRight: 30,
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    color: '#0a0a0a'
  },
  text_03: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    color: '#0a0a0a'
  },
  screen: {
    width: 182,
    height: 102.375,
    opacity: 0.9,
    backgroundColor: '#aaaaaa',
  },
  percent: {
    fontSize: 35,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "white",
    position: 'absolute',
    marginLeft: 100,
    marginTop: 58,
  },
  title: {
    width: 182,
    height: 40,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.14,
    textAlign: "left",
  },
  youtuber: {
    width: 182,
    height: 20,
    fontSize: 12,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: "#8a8a8a"
  }
})