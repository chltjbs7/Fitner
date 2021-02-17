import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Card = (props)=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress={()=>navigation.navigate("videoplayer", {videoId: props.videoId, title: props.title})}
        >
        <View style={{backgroundColor: "white", marginBottom: 10}}>
            <Image
            source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={styles.thumbnail}
            />
            <View style={{
                flexDirection: "row",
                margin: 8,
                marginLeft: 24
            }}>
                <MaterialIcons name="account-circle" size={40} color="#6c5ce7" />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                    >{props.title}</Text>
                    <Text style={styles.channel}>{props.channel} · {props.time}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    thumbnail: {
        width: "92%",
        height: 210,
        marginTop: 10,
        marginLeft: 16,
    },
    title: {
        fontSize: 14,
        width: 295,
        marginLeft: 8
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
})