import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import List from 'app/views/bottom/List'
import Account from 'app/views/bottom/Account'
import { User, Calculator } from '@tamagui/lucide-icons'
import { useColorScheme } from 'react-native'

const BottomTabs = createBottomTabNavigator<{
  list: undefined
  account: undefined
}>()

export function BottomNavigation() {
  const theme = useColorScheme()
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: theme === 'dark' ? '#18181B' : '#fff',
        },
      }}
    >
      <BottomTabs.Screen
        name="list"
        component={List}
        options={{
          tabBarIcon: ({ color }) => <Calculator color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </BottomTabs.Navigator>
  )
}
