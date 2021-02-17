import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { FontAwesome, } from '@expo/vector-icons';

const Chart = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <Text style={styles.title}>Fitner에서의 꾸준한 기록</Text>
                <Text style={styles.btitle}>나의 운동데이터</Text>
            </View>
            {/* <View style={styles.Mid}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.day}>
                        <Text style={{fontSize: 16, color: "#aaaaaa", textAlign: "center", marginTop: 6}}>일</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.week}>
                        <Text style={{fontSize: 16, color: "white", textAlign: "center", marginTop: 6}}>주</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.month}>
                        <Text style={{fontSize: 16, color: "#aaaaaa", textAlign: "center", marginTop: 6}}>월</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome name="angle-left" size={20} color="#000000" style={styles.btnL} />
                    <Text style={{marginTop: 21, color: "#9b90ee", fontSize: 14, marginLeft: 105}}>2020.12.28 ~ 2020.01.03</Text>
                    <FontAwesome name="angle-right" size={20} color="#000000" style={styles.btnR} />
                </View>
            </View> */}
        </View>
    )
}

export default Chart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
    Top: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Mid: {
        flex: 4,
    },
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
    day: {
        width: 72,
        height: 32,
        borderRadius: 30,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#aaaaaa",
        marginTop: 12,
        marginLeft: 95
    },
    week: {
        width: 72,
        height: 32,
        borderRadius: 30,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#9b90ee",
        backgroundColor: "#9b90ee",
        marginTop: 12,
        marginLeft: 5
    },
    month: {
        width: 72,
        height: 32,
        borderRadius: 30,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#aaaaaa",
        marginTop: 12,
        marginLeft: 5
    },
    btnL: {
        marginTop: 21,
        marginLeft: 16,
    },
    btnR: {
        marginTop: 21,
        marginLeft: 103
    }
})