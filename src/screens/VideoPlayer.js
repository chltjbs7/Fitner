import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Button, Alert,Linking,ScrollView } from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {navigation} from '@react-navigation/native'
import { useState } from 'react';
import CameraInput from '../components/CameraInput';
import * as Permissions from 'expo-permissions';
import {RNCamera} from 'react-native-camera';
import { Camera } from 'expo-camera';

export default function VideoPlayer ({route}){
    const [CameraSpace,setCameraSpace] = useState(false);
    const [isPermission,setIsPermission]=useState('null');
    const {videoId,title,} = route.params

    async function PermissionFlow(){
        const { status } =await Permissions.askAsync(Permissions.CAMERA);
        setIsPermission(status)
        if (status !== 'granted') {
            Alert.alert(
                "권한 거부",
                "원활한 스마트 운동을 위해서 카메라 권한을 설정해주세요.",
                [
                {
                    text: "취소",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "권한 설정", onPress: () => Linking.openURL('app-settings:') }
                ],
                { cancelable: false }
            );
        }
    }
    function Set_CameraSpace(){
        if (CameraSpace==false){    //cameraspace 설정 안되어 있을 경우
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
        }else{  // cameraspace 설정 되어 있을 경우 (CameraSpace==True 조건부렌더링)
            PermissionFlow();
            return (
                    <CameraInput isPermission={isPermission} />
            );
        }
    }
    return(
        <View style={{
            flex:1,
            marginTop:Constant.statusBarHeight
        }}>
        <View style={{
            width:"100%",
            height:220
        }}>
        <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri:`https://www.youtube.com/embed/${videoId}`}}
            />
        </View>
        <Set_CameraSpace />
        </View>
)
}

const styles = StyleSheet.create({
    permissionTest:{
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container:{
        flexDirection:'row',
        justifyContent: 'center'
    },
    tag: {
        width: 304,
        height: 19,
        fontSize: 13,
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "left",
        color: '#8cd790',
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
        backgroundColor: '#8cd790',
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
}
)