import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home';
import SearchScreen from './screen/Search'
import {AntDesign, FontAwesome, Feather, Entypo} from '@expo/vector-icons'
import { StatusBar } from 'react-native'

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <>
        <StatusBar 
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
    />

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
            component={HomeScreen}
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
        </>
        
    );
}