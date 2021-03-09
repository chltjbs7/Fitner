import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//%EC%A0%84%EC%8B%A0%20%EC%9A%B4%EB%8F%99

const WholeBody = (props)=>{
    const navigation = useNavigation();
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

            <TouchableOpacity
            onPress={()=>navigation.navigate("videoplayer", {videoId: props.videoId, title: props.title})}
            >
            <View style={{margin:10,marginBottom:0}}>
                <Image 
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={{
                    width: "100%",
                    height: 220,
                    marginTop: 8
                }} />
                <View style={{
                    flexDirection: "row",
                    margin: 4,
                    marginLeft: 16
                }}>
                <MaterialIcons name="account-circle" size={40} color="#6c5ce7" />
                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.title}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                    >{props.title}</Text>
                    <Text style={styles.channel}>{props.channel} · {props.time}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
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
        marginLeft: 133,
    },
  });