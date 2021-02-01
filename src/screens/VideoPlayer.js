import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {navigation} from '@react-navigation/native'
import { useState } from 'react';



function VideoPlayer ({route}){
    const [CameraSpace,setCameraSpace] = useState(false);
    const {videoId,title,} = route.params
    function Set_CameraSpace(){
        if (CameraSpace==false){
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
            
        }else{
            return(
                <Text>Camera_space</Text>
            )
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
/*
const VideoPlayer=({route})=>{
    const {videoId,title,} = route.params
    const [setView] = useState(0);
    //const videoId= route.params.videoId
    //const title=route.params.title
        //const {navigation}=this.props.navigation;
        //const videoId=navigation.getParam.videoId
        //const title=navigation.getParam.title
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
                        useWebKit={true}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsInlineMediaPlayback={true}
                        source={{uri:`https://www.youtube.com/embed/${videoId}?playsinline=1`}}
                    />
                </View>

                if (this.state.showView()) {
                        <View>
                            <Text style={styles.VideoName}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            >{title}</Text>

                            <View style={styles.container}>
                                <TouchableOpacity style={styles.Button}>
                                    <Text style={styles.ButtonName}>재생목록에 추가</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Button} onPress={() => removeView()}>
                                    <Text style={styles.ButtonName}>스마트운동 시작</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
    
                <View style={{borderBottomWidth:1, borderColor: '#E8E8E8', marginTop: 5, }} />
            </View>
        )
    }
*/
export default VideoPlayer

const styles = StyleSheet.create({
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
      },
})
