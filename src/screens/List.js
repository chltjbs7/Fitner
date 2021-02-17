import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';

const List = ({navigation})=>{
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <View style={{ flex: 1, backgroundColor: '#6c5ce7', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>오늘은 어떤 운동을 해볼까요?</Text>
          <Text style={styles.btitle}>Fitner 운동목록</Text>
        </View>
      </View>
    )
}

export default List

const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      fontWeight: "600",
      fontStyle: "normal",
      color: 'white',
      marginTop: 73,
    },
    btitle: {
      fontWeight: "600",
      fontSize: 22,
      color: 'white',
      marginTop: 10,
      marginBottom: 10
    },    
  });
  