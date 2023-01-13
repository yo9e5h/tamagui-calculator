import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from 'app/views/native/home'
import { BottomNavigation } from '../bottomtabs'

const Stack = createNativeStackNavigator<{
  home: undefined
  'bottom-tabs': undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="bottom-tabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="bottom-tabs"
        component={BottomNavigation}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  )
}
