import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../Screens/Quiz';
import Result from '../Screens/Result';
import Home from '../Screens/Home';
import { ChildrightVideo } from '../Screens/ChildRightVideo/ChildrightVideo';
import ResultScreen from '../Screens/ChildRightVideo/ResultScreen';
import { ChildrightVideo1 } from '../Screens/ChildRightVideo/ChildrightVideo1';
import GirlRightScreen from '../Screens/HumanRights/GirlRightScreen';
import GirlQuestionsScreen from '../Screens/HumanRights/GirlQuestionsScreen';
import GirlResultScreen from '../Screens/HumanRights/GirlResultScreen';
import BoyRights from '../Screens/HumanRights/BoyRights';
import BoyRightHome from '../Screens/HumanRights/BoyRightHome'
import BoyQuestionsScreen from '../Screens/HumanRights/BoyQuestionsScreen';
import BoyResultScreen from '../Screens/HumanRights/BoyResultScreen';
import { MaterialIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();


const MyStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name='Home' component={HomeScreen} screenOptions={{headerShown:false}}/>
         <Stack.Screen name='Homeee' component={Home}/>
         <Stack.Screen name='Quiz' component={Quiz}/>
         <Stack.Screen name='Result' component={Result}/>
         <Stack.Screen name='ChildrightVideo' component={ChildrightVideo}/>
         <Stack.Screen name='ResultScreen' component={ResultScreen}/>
         <Stack.Screen name='ChildrightVideo1' component={ChildrightVideo1}/>
         <Stack.Screen name='GirlRightScreen' component={GirlRightScreen}/>
         <Stack.Screen name='GirlQuestionsScreen' component={GirlQuestionsScreen}/>
         <Stack.Screen name='GirlResultScreen' component={GirlResultScreen}/>
        <Stack.Screen name='BoyRightHome' component={BoyRightHome}/>
        <Stack.Screen name='BoyQuestionsScreen' component={BoyQuestionsScreen}/>
        <Stack.Screen name='BoyResultScreen' component={BoyResultScreen}/>
    </Stack.Navigator>
  )
}


export default function TabNavigation() {
  
    return (
     <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:"#1A769F"}}>
          
          <Tab.Screen name='HomeScreen' component={MyStack}
          options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
            ),
            tabBarIcon:({color,size})=>(
              <FontAwesome name="home" size={size} color={color} />
            ),
            tabBarStyle:{
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
     
            }
       
          }}  
          />
          
<Tab.Screen name='Video' component={ChildrightVideo}
          options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Videos</Text>
            ),
            tabBarIcon:({color,size})=>(
              <MaterialIcons name="video-library" size={24} color={color} />
            ),
            tabBarStyle:{
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              
            }
          }}/>

          <Tab.Screen name='Profile' component={ProfileScreen}
          options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>
            ),
            tabBarIcon:({color,size})=>(
              <FontAwesome name="user-circle" size={size} color={color} />
            ),
            tabBarStyle:{
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              
            }
          }}/>



     </Tab.Navigator>
    )
  }

