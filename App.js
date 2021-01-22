import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import Constant from 'expo-constants';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import List from './src/screens/List';
import Chart from './src/screens/Chart';
import MyPage from './src/screens/MyPage';
import SubscriedYoutuber from './src/screens/SubscribedYouTuber';
import { reducer } from './src/reducers/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = ()=>{
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'list') {
          iconName = 'format-list-bulleted';
        }else if(route.name === 'chart'){
          iconName = 'insert-chart'
        }else if(route.name === 'mypage'){
          iconName = 'person-outline'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#6c5ce7',
      inactiveTintColor: '#aaaaaa',
    }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="list" component={List} />
      <Tabs.Screen name="chart" component={Chart} />
      <Tabs.Screen name="mypage" component={MyPage} />
    </Tabs.Navigator>
  )
}

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="rootHome" component={RootHome} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="subscriedyoutuber" component={SubscriedYoutuber} />
            <Stack.Screen name="videoplayer" component={VideoPlayer} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}