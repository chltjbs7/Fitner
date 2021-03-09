import React, {useState} from 'react';
import { StyleSheet, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
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
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=%${value}&videoLicense=creativeCommon&type=video&key=AIzaSyDu61S8UigTl9oXeiP9jDZ838l1tgclNe4`)
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
                    clearButtonMode="while-editing"
                    enablesReturnKeyAutomatically={true}
                    underlineColorPhone='transpatren'
                    value={value}
                    onChangeText={(text)=>setValue(text)}
                    //blurOnSubmit={true} 키보드 가리기
                    returnKeyType="go"
                    onSubmitEditing={()=>fetchData()}
                    />
                    <FontAwesome name="search" size={20} style={{marginTop: 12, marginRight: 5}} onPress={()=>fetchData()} />
                </View>
                <View style={{borderBottomWidth: 1, borderColor: '#e8e8e8', }} />
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

  });