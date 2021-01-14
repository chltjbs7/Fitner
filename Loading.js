import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading () {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Fitner</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7'
    },
    logo: {
        fontSize: 60,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 74,
        letterSpacing: 1,
        textAlign: "left",
        marginLeft: 135,
        marginTop: 360,
        color: 'white',
    },
});