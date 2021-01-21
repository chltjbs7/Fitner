import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons, } from '@expo/vector-icons';

const MyPage = ({navigation})=>{
    return (
        <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.Top}>
        <MaterialIcons name="account-circle" size={60} style={styles.profile} />
        <TouchableOpacity>
          <Text style={styles.id}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Mid}>
        <View>
          <Text style={styles.title}>내 Fitner</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("subscriedyoutuber")}>
            <Text style={styles.text}>구독한 유튜버</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>시청 기록</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>재생 목록</Text>
          </TouchableOpacity>
          <Text style={styles.line}>___________________________________________________________</Text>
        </View>
        <View>
          <Text style={styles.title}>환경설정</Text>
          <TouchableOpacity>
            <Text style={styles.text}>알림설정</Text>
          </TouchableOpacity>
          <Text style={styles.line}>___________________________________________________________</Text>
        </View>
        <View>
          <Text style={styles.title}>고객지원</Text>
          <TouchableOpacity>
            <Text style={styles.text}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>탈퇴하기</Text>
          </TouchableOpacity>
          <Text style={styles.line}>___________________________________________________________</Text>
        </View>
        <View>
          <Text style={styles.title}>앱 정보</Text>
          <TouchableOpacity>
            <Text style={styles.text}>이용약관</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>오픈소스 라이선스</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
        </View>
    )
}

export default MyPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    Top: {
      flex: 1.1,
      backgroundColor: '#6c5ce7',
    },
    Mid: {
      flex: 5,
      backgroundColor: '#ffffff',
    },
    id: {
      fontSize: 18,
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "left",
      color: 'white',
      marginLeft: 92,
      marginTop: -42,
    },
    profile: {
      justifyContent: 'center',
      marginTop: 67,
      marginLeft: 16,
      color: "white"
    },
    title: {
      fontSize: 16,
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "left",
      color: '#6c5ce7',
      marginTop: 12,
      marginLeft: 16,
    },
    text: {
      fontSize: 16,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "left",
      color: 'black',
      marginTop: 12,
      marginLeft: 23,
    },
    line: {
      color: '#e8e8e8',
    },
  });