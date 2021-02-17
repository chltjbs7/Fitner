import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Button, Alert,Linking } from 'react-native';
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
            <View>
                <Text style={styles.VideoName}
                numberOfLines={2}
                ellipsizeMode="tail"
                >{title}</Text>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonName}>재생목록에 추가</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => setCameraSpace((CameraSpace)=>true)}>
                        <Text style={styles.ButtonName}>스마트운동 시작</Text>
                    </TouchableOpacity>
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
    VideoName: {
        fontSize: 18,
        lineHeight: 22,
        fontStyle: "normal",
        color: '#000000',
        width: Dimensions.get("screen").width - 50,
        marginTop: 5,
        marginLeft: 16,
        marginBottom: 5,
    },
    Button: {
        width: 150,
        height: 40,
        backgroundColor: '#EE9090',
        borderRadius: 30,
        marginTop: 16,
        marginBottom: 16,
        marginHorizontal:17
    },
    ButtonName: {
        fontSize: 14,
        fontStyle: "normal",
        color: '#fff',
        marginHorizontal:150*0.2,
        marginTop: 11,
    }
}
)