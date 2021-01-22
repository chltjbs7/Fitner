import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';

const VideoPlayer = ({route})=>{
        const {videoId,title,} = route.params
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
            <Text style={styles.VideoName}
            numberOfLines={2}
            ellipsizeMode="tail"
            >{title}</Text>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonName}>재생목록에 이 동영상 추가</Text>
            </TouchableOpacity>
            <View style={{borderBottomWidth:1, borderColor: '#E8E8E8', marginTop: 5, }} />
            <View style={{flexDirection: "row", marginTop: 10, marginLeft: 16}}>
                <MaterialIcons name="account-circle" size={40} color="#6c5ce7" />
            </View>
        </View>
   )
}

export default VideoPlayer

const styles = StyleSheet.create({
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
        width: 199,
        height: 40,
        backgroundColor: '#EE9090',
        borderRadius: 30,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: '25%'
      },
      ButtonName: {
        fontSize: 14,
        fontStyle: "normal",
        color: '#fff',
        marginLeft: 28,
        marginTop: 11,
      },
})