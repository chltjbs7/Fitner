import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Signup({navigation}) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.Top}>
              <AntDesign name="arrowleft" size={24} style={styles.icon} onPress={()=>navigation.goBack()} />
              <Text style={styles.Screentitle}>회원가입</Text>
          </View>
          <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 13}} />
          <View style={styles.Mid}>
            <Text style={styles.Infotext1}>Fitner 이용을 위한</Text>
            <Text style={styles.Infotext2}>회원 정보를 입력해주세요.</Text>
            <View>
              <Text style={styles.title}>이름</Text>
                  <TextInput style={styles.input}
                  placeholder={'실명을 입력해주세요.'}
                  placeholderTextColor='#9f9f9f'
                  returnKeyType="next"
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  />
              <View style={styles.Inputverticle}></View>
            </View>
            <View>
              <Text style={styles.title}>아이디</Text>
                <View style={styles.box}>
                    <TextInput style={styles.input}
                    placeholder={'사용하실 아이디를 입력해주세요.'}
                    placeholderTextColor='#9f9f9f'
                    clearButtonMode="while-editing"
                    enablesReturnKeyAutomatically={true}
                    autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.IdButton}>
                    <Text style={styles.IdButtonName}>중복확인</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Inputverticle}></View>
            </View>
            <View>
              <Text style={styles.title}>비밀번호</Text>
                  <TextInput style={styles.input}
                  placeholder={'영문, 숫자, 특수문자 조합 6-15자 이내'}
                  placeholderTextColor='#9f9f9f'
                  secureTextEntry={true}
                  clearButtonMode="while-editing"
                  autoCapitalize="none"
                  enablesReturnKeyAutomatically={true}
                  maxLength={15}
                  />
              <View style={styles.Inputverticle}></View>
            </View>
            <View>
              <Text style={styles.title}>비밀번호 확인</Text>
                  <TextInput style={styles.input}
                  placeholder={'영문, 숫자, 특수문자 조합 6-15자 이내'}
                  placeholderTextColor='#9f9f9f'
                  blurOnSubmit={true}
                  secureTextEntry={true}
                  clearButtonMode="while-editing"
                  autoCapitalize="none"
                  enablesReturnKeyAutomatically={true}
                  maxLength={15}
                  />
              <View style={styles.Inputverticle}></View>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={()=>navigation.navigate("SignUpFinish")}>
                <Text style={styles.signUpButtonName}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  Mid: {
    flex: 7,
    backgroundColor: '#ffffff',
  },
  icon: {
    marginTop: 42,
    marginLeft: 16,
    marginRight: 16,
  },
  verticleLine:{
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  Screentitle: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 40,
    marginLeft: 118,
    color: '#6c5ce7',
    fontWeight: 'bold'
  },
  Infotext1: {
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 'bold',
    marginTop: 56,
    marginLeft: 16,
    color: '#0A0A0A',
  },
  Infotext2: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 5,
    marginLeft: 16,
    color: '#0A0A0A',
  },
  input: {
    width: 300,
    fontSize: 18,
    backgroundColor: 'white',
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#fff',
    color: '#0a0a0a',
    marginLeft: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontStyle: "normal",
    marginTop: 40,
    marginLeft: 16,
    color: '#6c5ce7',
    fontWeight: 'bold'
  },
  Inputverticle:{
    height: 2,
    width: 382,
    backgroundColor: '#E8E8E8',
    marginLeft: 16,
  },
  box: {
    flexDirection: "row",
  },
  IdButton: {
    width: 83,
    height: 35,
    backgroundColor: '#6c5ce7',
    borderRadius: 30,
    marginBottom: 5,
  },
  IdButtonName: {
    fontSize: 14,
    fontStyle: "normal",
    color: '#ffffff',
    textAlign: "center",
    marginTop: 10,
  },
  signUpButton: {
    width: 285,
    height: 53,
    backgroundColor: '#6c5ce7',
    borderRadius: 30,
    marginTop: 90,
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