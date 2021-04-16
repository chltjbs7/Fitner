import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.Top}>
        <Text style={styles.Screentitle}>회원가입</Text>
      </View>
      <View style={styles.verticleLine}></View>

      <View style={styles.Mid}>
        
        <Image
          style={styles.image}
          source={require('./assets/MorningJog.png')}
        />
        <Text style={styles.Infotext1}>회원가입이 완료되었습니다.</Text>
        <Text style={styles.Infotext2}>지금부터 Fitner를 이용해보세요!</Text>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonName}>로그인 하기</Text>
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
  },
  Mid: {
    flex: 7,
    backgroundColor: '#ffffff',
  },
  verticleLine:{
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  Screentitle: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 45,
    marginBottom: 20,
    marginLeft: 170,
    color: '#6c5ce7',
    fontWeight: 'bold'
  },
  Infotext1: {
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0A0A0A',
    textAlign: "center",
  },
  Infotext2: {
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 5,
    marginBottom: 40,
    color: '#0A0A0A',
    textAlign: "center",
  },
  image: {
    width: 230,
    height: 198,
    marginLeft: 95,
    marginTop: 145,
  },
  signUpButton: {
    width: 285,
    height: 53,
    backgroundColor: '#6c5ce7',
    borderRadius: 30,
    marginTop: 115,
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
