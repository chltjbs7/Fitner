import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


export default function App() {
  return (
    <ScrollView>
      <View style={styles.box}>
      <TouchableOpacity style={styles.Thumbnail_01} >
        <Image
          style={styles.Thumbnail}
          source={require('./assets/thumbnail.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.VideoName}>한 곳도 빠짐 없이 다 태우는 진짜 전신 유산소운동 + 근력 운동 ( 살 빠지는 운동 ) 홈트 | 레전드 전신...</Text>
        <Text style={styles.VideoInfo}>조회수 1.5만회 · 5개월 전</Text>
      </View>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.Thumbnail_01} >
        <Image
          style={styles.Thumbnail}
          source={require('./assets/thumbnail.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.VideoName}>층간소음 없는 전신유산소 20분 I Fat burning cardio ...</Text>
        <Text style={styles.VideoInfo}>조회수 1.5만회 · 5개월 전</Text>
      </View>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.Thumbnail_01} >
        <Image
          style={styles.Thumbnail}
          source={require('./assets/thumbnail.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.VideoName}>Full body workout 50min | 살 찐 분들 들어오세요! 전신운동 루틴</Text>
        <Text style={styles.VideoInfo}>조회수 1.5만회 · 5개월 전</Text>
      </View>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.Thumbnail_01} >
        <Image
          style={styles.Thumbnail}
          source={require('./assets/thumbnail.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.VideoName}>[체지방킬러:고독한 유산소 운동] 층간소음 걱정 1도 없는 ...</Text>
        <Text style={styles.VideoInfo}>조회수 1.5만회 · 5개월 전</Text>
      </View>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.Thumbnail_01} >
        <Image
          style={styles.Thumbnail}
          source={require('./assets/thumbnail.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.VideoName}>[체지방킬러:고독한 유산소 운동] 층간소음 걱정 1도 없는 ...</Text>
        <Text style={styles.VideoInfo}>조회수 1.5만회 · 5개월 전</Text>
      </View>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.Thumbnail_01} >
        <Image
          style={styles.Thumbnail}
          source={require('./assets/thumbnail.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.VideoName}>[체지방킬러:고독한 유산소 운동] 층간소음 걱정 1도 없는 ...</Text>
        <Text style={styles.VideoInfo}>조회수 1.5만회 · 5개월 전</Text>
      </View>
      </View>
      
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 19,
  },
  Thumbnail:{
    width: 165,
    height: 95,
    backgroundColor:'#e8e8e8',
    justifyContent: 'center',
    marginRight: 6,
  },
  VideoName: {
    width: 210,
    height: 40,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  VideoInfo: {
    width: 177,
    height: 40,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    color: '#8A8A8A',
  }
   
});
