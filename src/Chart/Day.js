import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import DayChart from './DayChart';

const Day = ()=>{
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
})