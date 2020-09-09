import 'react-native-gesture-handler'
import React from 'react'
import App from './src'
import HomeScreen from './src/screen/Home';
import SearchScreen from './src/screen/Search'
import DownloadsScreen from './src/screen/Downloads'
import DetailScreen from './src/screen/Detail'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {AntDesign, FontAwesome, Feather, Entypo} from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    initialRouteName="Home"
    
    tabBarOptions={{
        style:{
            backgroundColor: "#000",
            paddingBottom:0,
            borderTopColor: '#222',
            borderTopWidth:1
        },
        activeTintColor:'#fff',
        inactiveTintColor:'#ccc',
    }}
    >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            tabBarIcon: ({size, focused}) =>{
              return(
                <AntDesign
                  name="home"
                  size={size}
                  color={focused ? '#fff' : '#666'}
                />
              )
            },
            title:'Início',
          }}
        />
        <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
            tabBarIcon: ({size, focused}) =>{
              return(
                <FontAwesome
                  name="search"
                  size={size}
                  color={focused ? '#fff' : '#666'}
                />
              )
            },
            title:'Buscar',
          }}
        />
        <Tab.Screen 
        name="new" 
        component={HomeScreen}
        options={{
            tabBarIcon: ({size, focused}) =>{
              return(
                <Feather
                  name="copy"
                  size={size}
                  color={focused ? '#fff' : '#666'}
                />
              )
            },
            title:'Em breve',
          }}
        />

        <Tab.Screen 
        name="Downloads" 
        component={DownloadsScreen}
        options={{
            tabBarIcon: ({size, focused}) =>{
              return(
                <Feather
                  name="download"
                  size={size}
                  color={focused ? '#fff' : '#666'}
                />
              )
            },
            title:'Downloads',
          }}
        />

        <Tab.Screen 
        name="More" 
        component={HomeScreen}
        options={{
            tabBarIcon: ({size, focused}) =>{
              return(
                <Entypo
                  name="menu"
                  size={size}
                  color={focused ? '#fff' : '#666'}
                />
              )
            },
            title:'Mais',
          }}
        />
    </Tab.Navigator>
  )
}

export default function Main(){
  return (
    <>
    <StatusBar 
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
    />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='home' 
        component={Tabs}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name='search' 
        component={SearchScreen}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name='downloads' 
        component={DownloadsScreen}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name='Detail' 
        component={DetailScreen}
        options={{
          headerShown:false
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}