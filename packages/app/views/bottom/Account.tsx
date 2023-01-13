import { Button, H1, H2, YStack } from 'tamagui'
import { useColorScheme } from 'react-native'
import { useLink } from 'solito/link'

const Account = () => {
  const colorScheme = useColorScheme()

  const linkProps = useLink({
    href: `/`,
  })
  return (
    <YStack
      f={1}
      space
      theme={colorScheme === 'dark' ? 'dark' : 'light'}
      bg="$background"
      pt="$8"
      jc="center"
      ai="center"
    >
      <H1>Hello</H1>
      <H1 color="$green11Dark">Yogesh</H1>
    </YStack>
  )
}

export default Account
