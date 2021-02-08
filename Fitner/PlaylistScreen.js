import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.Top}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>재생목록</Text>
      </View>
      <View style={styles.verticleLine}></View>

      <View style={styles.Mid}>
        {/* 편집 버튼 */}
        <TouchableOpacity>
          <Text style={styles.edit}>편집</Text>
        </TouchableOpacity>


        {/* 디폴트 폴더 01 */}
        <View style={styles.box}> 
        <TouchableOpacity style={styles.default_folder}> 
          <Image
            style={styles.logo}
            source={require('./assets/Fitner_logo_grey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.folderTitle}>전신운동 루틴</Text>
          <Text style={styles.folderInfo}>동영상 0개</Text>
        </TouchableOpacity>
        </View>
        
         {/* 디폴트 폴더 02 */}
         <View style={styles.box}> 
        <TouchableOpacity style={styles.default_folder}> 
          <Image
            style={styles.logo}
            source={require('./assets/Fitner_logo_grey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.folderTitle}>30일 홈트레이닝 루틴</Text>
          <Text style={styles.folderInfo}>동영상 5개</Text>
        </TouchableOpacity>
        </View>
        
         {/* 디폴트 폴더 03 */}
         <View style={styles.box}> 
        <TouchableOpacity style={styles.default_folder}> 
          <Image
            style={styles.logo}
            source={require('./assets/Fitner_logo_grey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.folderTitle}>힙으뜸 유산소 운동</Text>
          <Text style={styles.folderInfo}>동영상 3개</Text>
        </TouchableOpacity>
        </View>
        
         {/* 디폴트 폴더 04 */}
         <View style={styles.box}> 
        <TouchableOpacity style={styles.default_folder}> 
          <Image
            style={styles.logo}
            source={require('./assets/Fitner_logo_grey.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.folderTitle}>하루 10분 루틴</Text>
          <Text style={styles.folderInfo}>동영상 3개</Text>
        </TouchableOpacity>
        </View>
        

        {/* 새폴더 생성 버튼 */}
        <View style={styles.Bottom}>
        <TouchableOpacity style={styles.createfolder}>
          <MaterialIcons name="create-new-folder" size={24} style={styles.foldericon} />
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
    backgroundColor: '#ffffff',
    flexDirection: "row",
  },
  Mid: {
    flex: 7,
    backgroundColor: '#ffffff',
  },
  Bottom: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  icon: {
    marginTop: 45,
    marginLeft: 16,
  },
  verticleLine:{
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 'bold',
    marginTop: 48,
    marginLeft: '4.3%',
    color: '#6c5ce7',
  },
  edit: {
    fontSize: 16,
    fontStyle: "normal",
    marginTop: 14,
    marginBottom: 14,
    marginLeft: '88%',
    color: '#8a8a8a',
  },
  box: {
    flexDirection: 'row',
  },
  default_folder: {
    width: 160,
    height: 90,
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
    marginLeft: 16,
    marginBottom: 25,
  },
  logo: {
    width: 80,
    height: 29,
    marginTop: '19%',
    marginLeft: '26%'
  },
  folderTitle: {
    fontSize: 18,
    fontStyle: "normal",
    marginTop: 19,
    marginLeft: 16,
    color: '#0a0a0a',
  },
  folderInfo: {
    fontSize: 14,
    fontStyle: "normal",
    marginLeft: 16,
    marginTop: 2,
    color: '#8a8a8a',
  },
  createfolder: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#6c5ce7',
    /* 하단 네비게이션 바 넣으면 bottom값 21로 수정하기 */
    bottom: 103,
    right: 21,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  foldericon: {
    margin: '26%',
    color: '#ffffff',
  },
});
