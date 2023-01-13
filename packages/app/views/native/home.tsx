import { YStack, H1, Button } from 'tamagui'
import { useColorScheme } from 'react-native'
import { useLink } from 'solito/link'

const Home = () => {
  const colorScheme = useColorScheme()

  const linkProps = useLink({
    href: `/account`,
  })

  return (
    <YStack f={1} space theme={colorScheme === 'dark' ? 'dark' : 'light'} bg="$background" pt="$8">
      <H1>Home</H1>
      <Button {...linkProps}>Go to Account</Button>
    </YStack>
  )
}
export default Home
