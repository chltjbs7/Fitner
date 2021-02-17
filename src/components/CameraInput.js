import Constant from 'expo-constants'
import * as React from 'react';
import { Dimensions,Text, View, StyleSheet, Alert,Linking,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera'
import { useState,useEffect } from 'react';

export default function CameraInput (props) {
    const [type, setType] = useState(Camera.Constants.Type.front);
    if (props.isPermission=='granted'){
        return(
            <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
                </View>
            </Camera>
            </View>
        );
    }
    return(
        <View />
    )
}




const styles = StyleSheet.create({
    container: {
      //flex: 1,
    },
    camera: {
      //flex: 1,
      width:Dimensions.get("screen").width,
      height:Dimensions.get("screen").height-260
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
      fontSize: 18,
      color: 'white',
    },
  });
  