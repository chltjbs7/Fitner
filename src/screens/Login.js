import * as React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Signup({navigation}) {
  return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                clearButtonMode="while-editing"
                autoCapitalize="none"
                enablesReturnKeyAutomatically={true}
              />
            </View>

            <View style={styles.inputConainter}>
              <TextInput
                style={styles.input}
                placeholder={'비밀번호'}
                placeholderTextColor={'#9f9f9f'}
                underlineColorPhone='transpatren'
                clearButtonMode="while-editing"
                autoCapitalize="none"
                secureTextEntry={true}
                maxLength={15}
                enablesReturnKeyAutomatically={true}
              />

            </View>        
        </SafeAreaView>
      </TouchableWithoutFeedback>
    )
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
    width: 285,
  },
  input: {
    width: 285,
    height: 53,
    borderRadius: 30,
    fontSize: 18,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'white',
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#e8e8e8',
    color: '#6c5ce7',
    
  },
});