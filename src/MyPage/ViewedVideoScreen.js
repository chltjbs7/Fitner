import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function SubscribedYouTuber({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
            <AntDesign name="arrowleft" size={24} style={{marginTop: 59, marginLeft: 16,}} onPress={()=>navigation.goBack()} />
            <Text style={styles.title}>시청기록</Text>
        </View>
        <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 10}} />
        <View style={{ flexDirection: "row" }}>
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
  }
});