import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
            <Image style={styles.logo} source={require('../../assets/Fitner_logo_01.png')} />
            <Text style={styles.info}>
            abc123님
            {'\n'}운동하기 딱 좋은 날이네요.
            {'\n'}오늘도 화이팅!
            </Text>
            <Image
            style={styles.logoImg}
            source={require('../../assets/Main_image.png')}
            />
            <TouchableOpacity style={styles.searchBox} onPress={()=>navigation.navigate("search")} activeOpacity={1} >
                <Text style={styles.seachText}>검색어를 입력하세요.</Text>
            </TouchableOpacity>
            <View style={styles.seachIcon}>
                <Ionicons name="md-search" size={22} color={"#525252"}
                style={{}} 
                onPress={()=>navigation.navigate("search")}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 304,
        backgroundColor: "#6c5ce7",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
      logo: {
          width: 112,
          height: 50,
          resizeMode: 'contain',
          position: 'relative',
          marginTop: 50,
          marginLeft: 12.5,
      },
      logoImg: {
          width: 148,
          height: 148,
          marginTop: -60,
          marginLeft: 263,
          position: 'relative',
      },
      info: {
          fontSize: 22,
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: 28,
          letterSpacing: 0,
          textAlign: "left",
          color: 'white',
          marginTop: 30,
          marginLeft: 16,
        },
      searchBox: {
          backgroundColor: "white",
          width: 300,
          height: 40,
          borderRadius: 40,
          marginTop: 240,
          marginLeft: 55,
          position: 'absolute',
      },
      seachText: {
          fontSize: 14,
          fontWeight: "normal",
          fontStyle: "normal",
          lineHeight: 28,
          letterSpacing: 0,
          textAlign: "left",
          color: "#9f9f9f",
          marginTop: 7,
          paddingLeft: 16,
          position: 'absolute',
      },
      seachIcon: {
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 5,
          marginTop: '-13%',
          marginLeft: '59%',
      },
})