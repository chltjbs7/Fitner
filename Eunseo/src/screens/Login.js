import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image} from 'react-native';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = ()=> {
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
            <Image style={styles.fitnerLogo} source={require('../../assets/Fitner_logo_02.png')}/>
          </View>

          <View style={styles.inputConainter}>
            <TextInput
            style={styles.input}
              placeholder={'아이디'}
              placeholderTextColor={'#9f9f9f'}
              underlineColorPhone='transpatren'
            />
          </View>

          <View style={styles.inputConainter}>
            <TextInput
              style={styles.input}
              placeholder={'비밀번호'}
              secureTextEntry={this.state.showPass}
              placeholderTextColor={'#9f9f9f'}
              underlineColorPhone='transpatren'
            />

          </View>        
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
    width: 219,
    height: 97,
    resizeMode: 'center',
    marginTop: 174,
  },
  inputConainter: {
    marginTop: 10,
    alignItems: 'center',
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
    
  },
});