import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Signup({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <AntDesign name="arrowleft" size={24} style={styles.icon} onPress={()=>navigation.goBack()} />
                <Text style={styles.Screentitle}>회원가입</Text>
            </View>
            <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 13}} />
            <View>
                <Image
                style={styles.logoImg}
                source={require('../../assets/MorningJog.png')}
                />
                <Text style={styles.text_1}>회원가입이 완료되었습니다.</Text>
                <Text style={styles.text_2}>지금부터 Fitner를 이용해보세요!</Text>
                <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonName} onPress={()=>navigation.navigate("LogIn")}>로그인 하기</Text>
                </TouchableOpacity>
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
    backgroundColor: '#ffffff',
    flexDirection: "row",
    marginTop: 15
  },
  icon: {
    marginTop: 42,
    marginLeft: 16,
    marginRight: 16,
  },
  Screentitle: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 40,
    marginLeft: 118,
    color: '#6c5ce7',
    fontWeight: 'bold'
  },
  logoImg: {
    width: 225,
    height: 193,
    marginTop: 145,
    marginLeft: "20%",
},
text_1: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
    marginTop: 10
},
text_2: {
    fontSize: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
},
  signUpButton: {
    width: 285,
    height: 53,
    backgroundColor: '#6c5ce7',
    borderRadius: 30,
    marginTop: 170,
    marginLeft: 65,
  },
  signUpButtonName: {
    fontSize: 20,
    fontStyle: "normal",
    color: '#ffffff',
    textAlign: "center",
    marginTop: 15,
  },
});