import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function App() {
  return (  
    <View style={styles.container}>

      <View style={styles.Top}>
        <Text style={styles.title}>Fitner에서의 꾸준한 기록</Text>
        <Text style={styles.btitle}>나의 운동데이터</Text>
      </View>

      <View style={styles.Mid}>

        {/* 날짜선택 탭 */}
        <View style={styles.box}>
        <TouchableOpacity style={styles.dateButton}>
           <Text style={styles.dateText}>일</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dateButton01}>
           <Text style={styles.dateText01}>주</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dateButton01}>
           <Text style={styles.dateText01}>월</Text>
        </TouchableOpacity>
        </View>

        {/* 세부 날짜 선택 */}
        <View style={styles.box01}>
          <TouchableOpacity>
          <MaterialIcons name="keyboard-arrow-left" size={24} style={styles.icon} />
          </TouchableOpacity>
          
          <Text style={styles.detaildate}>1월 28일 목요일</Text>

          <TouchableOpacity>
          <MaterialIcons name="keyboard-arrow-right" size={24} style={styles.icon} />
          </TouchableOpacity>      
        </View>

        {/* 그래프 */}

        {/* 오늘의 운동 피드백 */}
        <Text style={styles.text_01}>오늘의 운동 피드백</Text>

        <View style={styles.box01}>

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

        <View style={styles.box02}>
        <TouchableOpacity>
          <Image
            style={styles.Thumbnail}
            source={require('./assets/thumbnail.png')}
          />
           <Text style={styles.textBigName}>[Playing Pilates] 매트 전신운동 23 min★Full Body...</Text>
          <Text style={styles.textYtbName}>Playing Pilates</Text>
         </TouchableOpacity>

         <TouchableOpacity>
          <Image
            style={styles.Thumbnail}
            source={require('./assets/thumbnail.png')}
          />
          <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요...</Text>
          <Text style={styles.textYtbName}>힙으뜸</Text>
         </TouchableOpacity>  
        </View>

        <View style={styles.box02}>
        <TouchableOpacity>
          <Image
            style={styles.Thumbnail}
            source={require('./assets/thumbnail.png')}
          />
           <Text style={styles.textBigName}>[Playing Pilates] 매트 전신운동 23 min★Full Body...</Text>
          <Text style={styles.textYtbName}>Playing Pilates</Text>
         </TouchableOpacity>

         <TouchableOpacity>
          <Image
            style={styles.Thumbnail}
            source={require('./assets/thumbnail.png')}
          />
          <Text style={styles.textBigName}>Full body workout 50min | 살 찐 분들 들어오세요! 전...</Text>
          <Text style={styles.textYtbName}>힙으뜸</Text>
         </TouchableOpacity>  
        </View>
       
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
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Mid: {
    flex: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: 'white',
    marginBottom: 3,
  },
  btitle: {
    fontWeight: "600",
    fontSize: 24,
    color: 'white',
  },
  box: {
    flexDirection: 'row',
    marginLeft: 75
  },
  box01: {
    flexDirection: 'row',
  },
  box02: {
    flexDirection: 'row',
    marginLeft: '4.3%',
    marginRight: '4.3%',
  },
  dateButton: {
    width: 85,
    height: 38,
    borderRadius: 30,
    backgroundColor: '#9b90ee',
    marginRight: 5,
    marginTop: '3%'
  },
  dateText: {
    fontSize: 18,
    fontStyle: "normal",
    color: '#ffffff',
    marginTop: 9,
    marginLeft: '41%',
  },
  dateButton01: {
    width: 85,
    height: 38,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#aaaaaa',
    marginRight: 5,
    marginTop: '3%'
  },
  dateText01: {
    fontSize: 18,
    fontStyle: "normal",
    color: '#aaaaaa',
    marginTop: 9,
    marginLeft: '40%',
  },
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

  Thumbnail: {
    width: 184,
    height: 103,
    opacity: 0.9,
    marginRight: '2.7%'
  },
  textBigName: {
    width: 184,
    height: 42,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    marginTop: 3,
    color: '#0a0a0a',
  },
  textYtbName: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 16,
    color: '#8a8a8a',
    marginBottom: 30,
  }
  
});