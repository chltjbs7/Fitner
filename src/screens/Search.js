import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Constant from 'expo-constants';
import MiniCard from '../components/MiniCard';

const SearchScreen = ({navigation})=>{
        const [value,setValue] = useState("")
        // const [miniCardData, setMiniCard] = useState([])
        const dispatch = useDispatch()
        const miniCardData = useSelector(state=>{
            return state
        })
        const [loading, setLoading] = useState(false)
        const fetchData = () => {
            setLoading(true)
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=%${value}&type=video&key=AIzaSyByqZLkSuuPcwJafD6wtlg1PaSj5xj8uM4`)
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                dispatch({type:"add",payload:data.items})
                // setMiniCard(data.items)
            })
        }
    return (
            <View style={{ flex: 1, marginTop: Constant.systemVersion, backgroundColor: "white" }}>
                <View style={{ marginTop: 44, padding: 5, flexDirection: "row",  justifyContent: "space-around", backgroundColor: 'white' }}>
                    <AntDesign name="arrowleft" size={24} style={{marginTop: 10}} onPress={()=>navigation.goBack()} />
                    <TextInput
                    style={{ width: "70%", height: 50, backgroundColor: "white", fontSize: 18, marginTop: -3 }}
                    placeholder={'검색어를 입력하세요.'}
                    placeholderTextColor={'#9f9f9f'}
                    underlineColorPhone='transpatren'
                    value={value}
                    onChangeText={(text)=>setValue(text)}
                    />
                    <FontAwesome name="search" size={20} style={{marginTop: 12, marginRight: 5}} onPress={()=>fetchData()} />
                </View>
                <View style={{borderBottomWidth: 1, borderColor: '#e8e8e8', }} />
                {/* <Text style={styles.recommendation}>Fitner 추천 검색어</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.btn_01}>
                        <Text style={styles.text_01} >#스트레칭</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_02}>
                        <Text style={styles.text_02} >#유산소운동</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_03}>
                        <Text style={styles.text_01} >#전신운동</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.btn_04}>
                        <Text style={styles.text_02} >#상체운동</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_05}>
                        <Text style={styles.text_01} >#요가</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_06}>
                        <Text style={styles.text_02} >#허벅지운동</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.btn_07}>
                        <Text style={styles.text_01} >#층간소음없는</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_08}>
                        <Text style={styles.text_02} >#필라테스</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_09}>
                        <Text style={styles.text_01} >#하체운동</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomWidth: 1, borderColor: '#e8e8e8', marginTop: 30 }} />
                <Text style={styles.recent}>최근 검색어</Text> */}
                {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="#6c5ce7" />:null }
                <FlatList
                data={miniCardData}
                renderItem={({item})=>{
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        time={item.snippet.publishTime}
                        />
                }}
                keyExtractor={item=>item.id.videoId}
                />
            </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    recommendation: {
      fontSize: 14,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "left",
      color: '#6c5ce7',
      marginTop: 30,
      marginLeft: 16,
    },
    recent: {
      fontSize: 14,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "left",
      color: '#6c5ce7',
      marginTop: 30,
      marginLeft: 16,
    },
    text_01: {
      fontSize: 16,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "center",
      color: 'white',
      marginTop: 3,
    },
    text_02: {
      fontSize: 16,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "center",
      color: '#9f9f9f',
      marginTop: 3,
    },
    btn_01: {
      width: 96,
      height: 37,
      borderRadius: 30,
      backgroundColor: '#9b90ee',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginLeft: 16,
      marginTop: 16,
    },
    btn_02: {
      width: 110,
      height: 37,
      borderRadius: 30,
      backgroundColor: 'white',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginLeft: 20,
      marginTop: 16,
    },
    btn_03: {
      width: 96,
      height: 37,
      borderRadius: 30,
      backgroundColor: '#9b90ee',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginLeft: 20,
      marginTop: 16,
    },
    btn_04: {
      width: 96,
      height: 37,
      borderRadius: 30,
      backgroundColor: 'white',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginLeft: 16,
      marginTop: 10,
    },
    btn_05: {
      width: 66,
      height: 37,
      borderRadius: 30,
      backgroundColor: '#9b90ee',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginTop: 10,
      marginLeft: 20,
    },
    btn_06: {
      width: 110,
      height: 37,
      borderRadius: 30,
      backgroundColor: 'white',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginLeft: 20,
      marginTop: 10,
    },
    btn_07: {
      width: 125,
      height: 37,
      borderRadius: 30,
      marginLeft: 16,
      marginTop: 10,
      backgroundColor: '#9b90ee',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
    },
    btn_08: {
      width: 96,
      height: 37,
      borderRadius: 30,
      backgroundColor: 'white',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginLeft: 20,
      marginTop: 10,
    },
    btn_09: {
      width: 96,
      height: 37,
      borderRadius: 30,
      backgroundColor: '#9b90ee',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#9b90ee',
      marginLeft: 20,
      marginTop: 10,
    },
  });