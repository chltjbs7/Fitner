import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Constant from 'expo-constants';
import MiniCard from '../components/MiniCard';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=%ED%99%88%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D&type=video&key=AIzaSyBDIjxJlQjWI3hDfyeE8vlgeXvmUVhI9b0

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
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBDIjxJlQjWI3hDfyeE8vlgeXvmUVhI9b0`)
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                dispatch({type:"add",payload:data.items})
                // setMiniCard(data.items)
            })
        }
    return (
        <View style={{
            flex: 1,
            marginTop: Constant.systemVersion,
            }}>
            <View style={{
                marginTop: 44,
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                backgroundColor: 'white'
            }}>
                <AntDesign name="arrowleft" size={32}
                style={{marginTop: 10}}
                onPress={()=>navigation.goBack()}
                />
                <TextInput
                style={{
                    width: "70%",
                    height: 53,
                    backgroundColor: "white",
                    fontSize: 18
                    }}
                placeholder={'검색어를 입력하세요.'}
                placeholderTextColor={'#9f9f9f'}
                underlineColorPhone='transpatren'
                value={value}
                onChangeText={(text)=>setValue(text)}
                />
                <FontAwesome name="search" size={24}
                style={{marginTop: 12, marginRight: 5}}
                onPress={()=>fetchData()}
                />
            </View>
             {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="#6c5ce7" />:null }
            <FlatList
            data={miniCardData}
            renderItem={({item})=>{
                return <MiniCard
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
            }}
            keyExtractor={item=>item.id.videoId}
            />
        </View>        
    )
}

export default SearchScreen