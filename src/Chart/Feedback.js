import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Feddback ({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
            <AntDesign name="arrowleft" size={24} style={{marginTop: 59, marginLeft: 16,}} onPress={()=>navigation.goBack()} />
            <Text style={styles.title}>세부 피드백</Text>
        </View>
        <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 10}} />
        <View style={{ flexDirection: "row" }}>
        </View>
        <View>
            <Text style={styles.result}>동작 유사도 결과</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.screen} />
                <View style={styles.screen} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 18, marginTop: 6, marginLeft: 130}}>영상의</Text>
                <Text style={{fontSize: 18, marginTop: 6, color: "#6c5ce7", marginLeft: 5}}>5분 20초에서 ~ 25초 사이</Text>
                <Text style={{fontSize: 18, marginTop: 6}}>의</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 22, marginLeft: 280}}>유사도</Text>
                <Text style={{fontSize: 22, color: "#6c5ce7", marginLeft: 5}}>90%</Text>
            </View>
        </View>
        <View style={{marginTop: 30}}>
            <Text style={styles.result}>가장 낮은 유사도 동작</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.screen} />
                <View style={styles.screen} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 18, marginTop: 6, marginLeft: 130}}>영상의</Text>
                <Text style={{fontSize: 18, marginTop: 6, color: "#6c5ce7", marginLeft: 5}}>8분 12초에서 ~ 17초 사이</Text>
                <Text style={{fontSize: 18, marginTop: 6}}>의</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 22, marginLeft: 280}}>유사도</Text>
                <Text style={{fontSize: 22, color: "#6c5ce7", marginLeft: 5}}>45%</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: '#6c5ce7',
    marginTop: 57,
    marginLeft: 16,
  },
  ID: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 20,
    marginLeft: 16
  },
  result: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 16,
    marginLeft: 16
  },
  screen: {
    width: 180,
    height: 180,
    borderRadius: 10,
    backgroundColor: "#e8e8e8",
    marginTop: 16,
    marginLeft: 16
  }
});