import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import { useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import CameraInput from '../components/CameraInput';

const VideoPlayer = ({route})=>{
    const [CameraSpace,setCameraSpace] = useState(false);
    const {videoId,title,} = route.params
    function Set_CameraSpace(){
        if (CameraSpace==false){
            return(
            <View style={{backgroundColor: "white", flex:1,}}>
                <Text style={styles.tag}>#cardioworkout #층간소음없는유산소 #전신유산소운동</Text>
                <Text style={styles.VideoName}
                ellipsizeMode="tail"
                >{title}</Text>
                <Text style={styles.info}>조회수 1.5만회 · 1개월 전</Text>
                <View style={{flexDirection: "row",}}>
                    <TouchableOpacity>
                        <MaterialIcons name="library-add" size={20} color="#8a8a8a"  style={{marginTop: 14, marginLeft: 51}} />
                        <Text style={styles.text}>재생목록에 추가</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => setCameraSpace((CameraSpace)=>true)}>
                        <Text style={styles.ButtonName}>AI와 함께 운동하기</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#e8e8e8', marginTop: 7, }} />

                <View style={{flexDirection: "row", marginTop: 10, marginLeft: 16}}>
                    <MaterialIcons name="account-circle" size={40} color="#6c5ce7" />
                    <View style={{flexDirection: "column"}}>
                        <Text style={styles.ytbName}>유튜버 이름</Text>
                        <Text style={styles.ytbNum}>구독자 몇 명</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.subsBtn}>구독</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#e8e8e8', marginTop: 10, }} />

                <View>
                    <Text style={styles.title}>유사도 랭킹</Text>
                    <ScrollView>
                        <View style={styles.rankingBox}>
                            <View style={styles.num_1}>
                                <Text style={{fontSize: 20, color: "#ffffff", textAlign: "center", marginTop: 2}}>1</Text>
                            </View>
                            <Text style={styles.id}>abc123</Text>
                            <Text style={styles.percent}>99%</Text>
                        </View>
                        <View style={styles.rankingBox}>
                            <View style={styles.num_2}>
                                <Text style={{fontSize: 20, color: "#ffffff", textAlign: "center", marginTop: 2}}>2</Text>
                            </View>
                            <Text style={styles.id}>abc123</Text>
                            <Text style={styles.percent}>97%</Text>
                        </View>
                        <View style={styles.rankingBox}>
                            <View style={styles.num_3}>
                                <Text style={{fontSize: 20, color: "#ffffff", textAlign: "center", marginTop: 2}}>3</Text>
                            </View>
                            <Text style={styles.id}>abc123</Text>
                            <Text style={styles.percent}>95%</Text>
                        </View>
                        <View style={styles.rankingBox}>
                            <View style={styles.num_4}>
                                <Text style={{fontSize: 20, color: "black", textAlign: "center", marginTop: 2}}>4</Text>
                            </View>
                            <Text style={styles.id}>abc123</Text>
                            <Text style={styles.percent}>89%</Text>
                        </View>
                        <View style={styles.rankingBox}>
                            <View style={styles.num_4}>
                                <Text style={{fontSize: 20, color: "black", textAlign: "center", marginTop: 2}}>5</Text>
                            </View>
                            <Text style={styles.id}>abc123</Text>
                            <Text style={styles.percent}>85%</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            )
        }else{
            //카메라
            return(
                <View>
                    <Text>Camera_space</Text>
                    <CameraInput />
                </View>
            )
        }
    }
    return (
        <View style={{ flex:1, marginTop:Constant.statusBarHeight }}>
            <View style={{ width:"100%", height: 233 }}>
            <WebView
                useWebKit={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsInlineMediaPlayback={true}
                source={{uri:`https://www.youtube.com/embed/${videoId}?playsinline=1`}}
                />
            </View>
            <Set_CameraSpace />
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    tag: {
        width: 304,
        height: 19,
        fontSize: 13,
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "left",
        color: '#8ad3c0',
        marginTop: 16,
        marginLeft: 16
    },
    VideoName: {
        fontSize: 18,
        lineHeight: 22,
        fontStyle: "normal",
        color: '#000000',
        width: 382,
        marginTop: 5,
        marginLeft: 16,
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "left",
        color: '#8a8a8a',
        marginLeft: 16
    },
    Button: {
        width: 217,
        height: 40,
        backgroundColor: '#8ad3c0',
        borderRadius: 30,
        marginTop: 14,
        marginBottom: 16,
        marginLeft: 72
      },
    ButtonName: {
        fontSize: 14,
        fontStyle: "normal",
        color: '#fff',
        textAlign: "center",
        marginTop: 11,
      },
    channel: {
        fontSize: 12,
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        color: '#a2a2a2',
        marginLeft: 8
    },
    ytbName: {
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.08,
        marginLeft: 16
    },
    ytbNum: {
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        color: '#aaaaaa',
        marginLeft: 16
    },
    subsBtn: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.08,
        color: '#6c5ce7',
        marginTop: 8,
        marginLeft:  210
    },
    text: {
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.07,
        color: '#8a8a8a',
        marginLeft: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        marginTop: 35,
        marginLeft: 16,
    },
    rankingBox: {
        width: 382,
        height: 58,
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e8e8e8",
        marginTop: 12,
        marginLeft: 16,
        flexDirection: "row",
    },
    num_1: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#6c5ce7",
        marginTop: 12,
        marginLeft: 16
    },
    num_2: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#9b90ee",
        marginTop: 12,
        marginLeft: 16
    },
    num_3: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#c8bffc",
        marginTop: 12,
        marginLeft: 16
    },
    num_4: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        marginTop: 12,
        marginLeft: 16
    },
    id: {
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        marginTop: 18,
        marginLeft: 16,
    },
    percent: {
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        marginTop: 18,
        marginLeft: 196,
    },
})