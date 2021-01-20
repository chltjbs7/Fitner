import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass =() => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.wrap}>
          <View style={styles.logoContainer}>
            <Text style={styles.fitnerLogo}>Fitner</Text>
          </View>

          <View style={styles.inputConainter}>
            <TextInput
            style={styles.input}
              placeholder={'아이디'}
              placeholderTextColor='#9f9f9f
'
              underlineColorPhone='transpatren'
            />
          </View>

          <View style={styles.inputConainter}>
            <TextInput
              style={styles.input}
              placeholder={'비밀번호'}
              secureTextEntry={this.state.showPass}
              placeholderTextColor='#9f9f9f
'
              underlineColorPhone='transpatren'
            />

          </View>

          <TouchableOpacity style={styles.btnLogin} underlayColor="#6c5ce7">
            <Text style={styles.text}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text_1}>아이디/비밀번호 찾기</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text_2}>회원가입</Text>
          </TouchableOpacity>
          
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "rgba(232, 232, 232, 0.3)"
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  fitnerLogo: {
    width: 148,
    height: 74,
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 74,
    letterSpacing: 0,
    textAlign: "left",
    color: '#6c5ce7',
    marginTop: 174,
  },
  inputConainter: {
    marginTop: 10
  },
  input: {
    width: 285,
    height: 53,
    borderRadius: 30,
    fontSize: 18,
    paddingLeft: 25,
    backgroundColor: 'white',
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#e8e8e8',
    color: '#6c5ce7',
    marginLeft: 65
  },
  btnLogin: {
    width: 285,
    height: 53,
    borderRadius: 30,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    marginTop: 120,
    marginLeft: 65
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
  },
  text_1: {
    width: 142,
    height: 24,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: "#9f9f9f",
    marginTop: 13,
    marginLeft: 80 ,
  },
  text_2: {
    width: 59,
    height: 24,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: '#6c5ce7',
    marginTop: -23,
    marginLeft: 264,
  }
});