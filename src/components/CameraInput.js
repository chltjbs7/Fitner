import Constants from 'expo-constants'
import * as React from 'react';
import { Dimensions,Text, View, StyleSheet, Alert,Linking,TouchableOpacity, ScrollView,Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera'
import { useState,useEffect } from 'react';
import { fetch, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet'
import * as ScreenOrientation from 'expo-screen-orientation';


export default function CameraInput (props) {
    const [type, setType] = useState(Camera.Constants.Type.front);
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }
    changeScreenOrientation()
    if (props.isPermission=='granted'){
        return(
            <View style={styles.container}>
            <Camera style={styles.camera} type={type} />
            </View>
        );
    }
    return(
        
        <View />
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexDirection:"row"
    },
    camera: {
      flex: 1,
      width:"30%",
      height:"100%",
      //position:'absolute',
    },
    buttonContainer: {
      //flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      //flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      textAlign:'center',
      fontSize: 18,
      color: 'black',
      position: 'relative',
    },
  });

