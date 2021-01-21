import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constant from 'expo-constants';

export default function Header() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
            <Text style={styles.logo}>Fitner</Text>
            <Text style={styles.info}>
            abc123님
            {'\n'}운동하기 딱 좋은 날이네요.
            {'\n'}오늘도 화이팅!
            </Text>
            <View style={styles.searchBox}>
                <Text style={styles.seachText}>검색어를 입력하세요.</Text>
            </View>
            <View style={styles.seachIcon}>
                <Ionicons name="md-search" size={24} color={"#525252"}
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
        height: 304,
        backgroundColor: "#6c5ce7",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 28,
        marginTop: 50,
        marginLeft: 16,
        color: "white",
        fontWeight: "bold"
    },
    info: {
        fontSize: 22,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0,
        textAlign: "left",
        color: 'white',
        marginTop: '9.9%',
        marginLeft: 16,
      },
    searchBox: {
        backgroundColor: "white",
        width: 300,
        height: 40,
        borderRadius: 40,
        marginTop: 45,
        marginLeft: 55,
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
    },
    seachIcon: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5,
        marginTop: '-9.5%',
        marginLeft: '81%',
    },
})