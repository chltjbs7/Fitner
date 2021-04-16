import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { MaterialIcons } from '@expo/vector-icons';
import { reducer } from './src/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import SignupFinish from './src/screens/SignupFinish';

import Home from './src/screens/Home';
import Header from './src/components/Header';
import Youtuber from './src/components/Youtuber';

import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import SubscriedYoutuber from './src/MyPage/SubscribedYouTuber';

import List from './src/screens/List';
import WholeBody from './src/List/WholeBody';
import Neck from './src/List/Neck';
import Shoulder from './src/List/Shoulder';
import Arm from './src/List/Arm';
import Chest from './src/List/Chest';
import Abs from './src/List/Abs';
import Hip from './src/List/Hip';
import Thigh from './src/List/Thigh';
import Leg from './src/List/Leg';

import Day from './src/components/Day';
import Week from './src/components/Week';
import Month from './src/components/Month';

import YtbChannelScreen from './src/screens/YtbChannelScreen';
import ViewedVideoScreen from './src/MyPage/ViewedVideoScreen';
import PlaylistScreen from './src/MyPage/PlaylistScreen';

const store = createStore(reducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const LogInScreen = ({navigation})=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(232, 232, 232, 0.3)" }}>
      <Login />
      <TouchableOpacity style={styles.btnLogin} underlayColor="#6c5ce7"
      onPress={() => navigation.navigate('rootHome')}
      >
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <TouchableOpacity>
          <Text style={styles.text_1}>아이디/비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.text_2}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HomeScreen ({navigation}) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Header />
      </View>
      <View>
        <Text style={styles.strapline}>구독한 유튜버</Text>
        <Youtuber />
      </View>
      <View>
        <Text style={styles.strapline}>시청 중인 동영상</Text>
        <Home />
      </View>
    </ScrollView>
  );
}

function ListScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <List />
      <View style={{ flex: 4 }}>
          <View style={styles.box}>
            <TouchableOpacity style={styles.topList} onPress={()=>navigation.navigate("wholebody")}>
              <Text style={styles.name}>전신</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topList} onPress={()=>navigation.navigate("neck")}>
            <Text style={styles.name}>목</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topList} onPress={()=>navigation.navigate("shoulder")}>
              <Text style={styles.name}>어깨</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate("arm")}>
              <Text style={styles.name}>팔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate("chest")}>
             <Text style={styles.name}>가슴</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate("abs")}>
             <Text style={styles.name}>복근</Text>
            </TouchableOpacity>
          </View> 

          <View style={styles.box}>
            <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate("hip")}>
              <Text style={styles.name}>엉덩이</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate("thigh")}>
             <Text style={styles.name}>허벅지</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate("leg")}>
             <Text style={styles.name}>다리</Text>
            </TouchableOpacity>
          </View> 
        </View>
    </View>
  );
}

function ChartScreen() {
  return (
    <View style={{ flex: 0.4, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 1, backgroundColor: '#6c5ce7', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: "600", fontStyle: "normal", color: 'white', marginTop: 73 }}>Fitner에서의 꾸준한 기록</Text>
          <Text style={{ fontWeight: "600", fontSize: 22, color: 'white', marginTop: 10, marginBottom: 10 }}>나의 운동데이터</Text>
      </View>
      <ChartTabs />
    </View>
  );
}

function dayScreen() {
  return (
    <Day />
  );
}

function weekScreen() {
  return (
    <Week />
  );
}

function monthScreen() {
  return (
    <Month />
  );
}

function ChartTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#9b90ee',
        inactiveTintColor: '#aaaaaa',
        backgroundColor: 'white',
        labelStyle: { fontSize: 16, fontWeight: '600', justifyContent: 'center', alignItems: 'center', lineHeight: 25 },
        style: { backgroundColor: 'white' },
        tabStyle: { marginBottom: 2, backgroundColor: '#ffffff' },
        indicatorStyle: { backgroundColor: '#9b90ee' },
      }}
    >
      <Tab.Screen name="일" component={dayScreen} options={{ tabBarLabel: '일' }} />
      <Tab.Screen name="주" component={weekScreen} options={{ tabBarLabel: '주' }} />
      <Tab.Screen name="월" component={monthScreen} options={{ tabBarLabel: '월' }} />
    </Tab.Navigator>
  );
}

function MyPageScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 0.55, backgroundColor: '#6c5ce7' }}>
        <MaterialIcons name="account-circle" size={60} style={styles.mp_profile} />
        <Text style={styles.mp_id}>abc123</Text>
      </View>
      <View>
        <Text style={styles.mp_title}>내 Fitner</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("subscriedyoutuber")}>
          <Text style={styles.mp_text}>구독한 유튜버</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("viewedVideoScreen")}>
          <Text style={styles.mp_text}>시청 기록</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("playlistScreen")}>
          <Text style={styles.mp_text}>재생 목록</Text>
        </TouchableOpacity>
        <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 12}} />
      </View>
      <View>
        <Text style={styles.mp_title}>환경설정</Text>
        <TouchableOpacity>
          <Text style={styles.mp_text}>알림설정</Text>
        </TouchableOpacity>
        <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 12}} />
      </View>
      <View>
        <Text style={styles.mp_title}>고객지원</Text>
        <TouchableOpacity>
          <Text style={styles.mp_text} onPress={()=>navigation.navigate("LogIn")}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.mp_text}>탈퇴하기</Text>
        </TouchableOpacity>
        <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 12}} />
      </View>
      <View>
        <Text style={styles.mp_title}>앱 정보</Text>
        <TouchableOpacity>
          <Text style={styles.mp_text}>이용약관</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.mp_text}>오픈소스 라이선스</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const RootHome = ()=>{
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'List') {
          iconName = 'format-list-bulleted';
        }else if(route.name === 'Chart'){
          iconName = 'insert-chart'
        }else if(route.name === 'MyPage'){
          iconName = 'person-outline'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={31} color={color} style={{marginTop: 8}} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#6c5ce7',
      inactiveTintColor: '#aaaaaa',
      showLabel: false,
    }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="List" component={ListScreen} />
      <Tabs.Screen name="Chart" component={ChartScreen} />
      <Tabs.Screen name="MyPage" component={MyPageScreen} />
    </Tabs.Navigator>
  )
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="SignUpFinish" component={SignupFinish} />

          <Stack.Screen name="rootHome" component={RootHome} />

          <Stack.Screen name="ytbchannel" component={YtbChannelScreen} />

          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />

          <Stack.Screen name="wholebody" component={WholeBody} />
          <Stack.Screen name="neck" component={Neck} />
          <Stack.Screen name="shoulder" component={Shoulder} />
          <Stack.Screen name="arm" component={Arm} />
          <Stack.Screen name="chest" component={Chest} />
          <Stack.Screen name="abs" component={Abs} />
          <Stack.Screen name="hip" component={Hip} />
          <Stack.Screen name="thigh" component={Thigh} />
          <Stack.Screen name="leg" component={Leg} />

          <Stack.Screen name="charttab" component={ChartTabs} />

          <Stack.Screen name="subscriedyoutuber" component={SubscriedYoutuber} />
          <Stack.Screen name="viewedVideoScreen" component={ViewedVideoScreen} />
          <Stack.Screen name="playlistScreen" component={PlaylistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  btnLogin: { width: 285,  height: 53,  borderRadius: 30,  backgroundColor: '#6c5ce7',  justifyContent: 'center',  marginBottom: 13 },
  text: { color: '#ffffff',  fontSize: 18, textAlign: 'center', lineHeight: 28 },
  textContainer: { flexDirection: "row", marginBottom: 188 },
  text_1: { width: 142, height: 24, fontSize: 16, fontWeight: "normal", fontStyle: "normal", lineHeight: 28, letterSpacing: 0, textAlign: "left", color: "#9f9f9f", marginLeft: 10 },
  text_2: { width: 59,  height: 24, fontSize: 16, fontWeight: "500", fontStyle: "normal", lineHeight: 28, letterSpacing: 0, textAlign: "left", color: '#6c5ce7', marginLeft: 70, marginRight: 10 },

  strapline: { marginTop: 24, marginLeft: 16, fontSize: 16, fontWeight: "normal", fontStyle: "normal", lineHeight: 28, letterSpacing: 0, textAlign: "left", color: 'black' },

  mp_text: { fontSize: 16, fontWeight: "normal", fontStyle: "normal", lineHeight: 28, letterSpacing: 0, textAlign: "left", color: 'black', marginTop: 12, marginLeft: 23 },
  mp_id: { fontSize: 18, fontWeight: "500", fontStyle: "normal", lineHeight: 28, letterSpacing: 0, textAlign: "left", color: 'white', marginLeft: 92, marginTop: -45 },
  mp_profile: { marginTop: 77, marginLeft: 16, color: "white" },
  mp_title: { fontSize: 16, fontWeight: "600", fontStyle: "normal", lineHeight: 28, letterSpacing: 0, textAlign: "left", color: '#6c5ce7', marginTop: 12, marginLeft: 16 },

  topList: { width: 105, height: 105, borderRadius: 5, borderWidth: 1, borderColor: '#6c5ce7', backgroundColor: '#ffffff', marginTop: 79, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.16 },
  list: { width: 105, height: 105, borderRadius: 5, borderWidth: 1, borderColor: '#6c5ce7', backgroundColor: '#ffffff', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.16 },
  box: { margin: 30, marginTop: 20, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 18, fontStyle: "normal", textAlign: "center", marginTop: 40 }
})