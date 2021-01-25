import React, {useState} from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//%EC%A0%84%EC%8B%A0%EC%9A%B4%EB%8F%99

const WholeBody = ({navigation})=>{

return (
    <View style={{
        flex: 1,
        backgroundColor: 'white',
        }}>
        <View style={{ flexDirection: "row" }}>
            <AntDesign name="arrowleft" size={24}
            style={{marginTop: 55, marginLeft: 16,}}
            onPress={()=>navigation.goBack()}
            />
            <Text style={styles.title}>전신 운동</Text>
        </View>
        <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 20}} />
    </View>        
)
}

export default WholeBody

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontStyle: "normal",
        marginTop: 55,
        marginLeft: 140,
    },
  });