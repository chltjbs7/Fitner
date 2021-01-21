import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,} from 'react-native';

import { FontAwesome, } from '@expo/vector-icons';

export default function App() {
  return (  
    <View style={styles.container}>
      <View style={styles.Top}>
        <Text style={styles.title}>오늘은 어떤 운동을 해볼까요?</Text>
        <Text style={styles.btitle}>Fitner 운동목록</Text>
      </View>
      <View style={styles.Mid}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.name}>전신</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.list}>
          <Text style={styles.name}>목</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.list}>
            <Text style={styles.name}>어깨</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.name}>팔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
           <Text style={styles.name}>가슴</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
           <Text style={styles.name}>복근</Text>
          </TouchableOpacity>
        </View> 
        <View style={styles.box}>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.name}>엉덩이</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
           <Text style={styles.name}>허벅지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
           <Text style={styles.name}>다리</Text>
          </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Top: {
    flex: 1,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Mid: {
    flex: 4,
    marginTop: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    color: 'white',
  },
  btitle: {
    fontWeight: "600",
    fontSize: 22,
    color: 'white',
  },
  list: {
    width: 105,
    height: 105,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6c5ce7',
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
  },
  box: {
    margin: 30,
    marginTop: 20,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 40,
  }
  
});
