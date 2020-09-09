import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './Navigation'
import { createStackNavigator } from '@react-navigation/stack'

import Detail from '../src/screen/Detail'

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <Navigation/>
        
    </NavigationContainer>
    </>
    
  );
}