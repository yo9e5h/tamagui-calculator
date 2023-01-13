import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'bottom-tabs',
            screens: {
              home: '',
              'bottom-tabs': 'bottom-tabs',
              list: 'list',
              account: 'account',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
