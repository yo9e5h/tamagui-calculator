import { Button, H1, H2, H4, Input, YStack } from 'tamagui'
import { useColorScheme } from 'react-native'
import { useLink } from 'solito/link'
import React from 'react'

const List = () => {
  const colorScheme = useColorScheme()

  const [principal, setPrincipal] = React.useState(0)
  const [interestRate, setInterestRate] = React.useState(0)
  const [term, setTerm] = React.useState(0)
  const [emi, setEmi] = React.useState(0)

  const calculate = () => {
    const monthlyRate = interestRate / 100 / 12
    const monthlyPayment =
      (principal * monthlyRate) / (1 - Math.pow(1 / (1 + monthlyRate), term * 12))
    setEmi(monthlyPayment)
  }

  const linkProps = useLink({
    href: `/`,
  })

  return (
    <YStack
      f={1}
      theme={colorScheme === 'dark' ? 'dark' : 'light'}
      bg="$background"
      jc="space-around"
      p="$4"
      pt="$8"
    >
      <YStack space>
        <H1>Loan Calculator</H1>
        <YStack>
          <H4>Principal Amount</H4>
          <Input
            size="$4"
            borderWidth={2}
            keyboardType="numeric"
            backgroundColor={colorScheme === 'dark' ? '$gray5Dark' : '$gray5Light'}
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            placeholder={`Enter Principal`}
            onChangeText={(e) => setPrincipal(parseInt(e))}
          />
        </YStack>
        <YStack>
          <H4>Interest Rate</H4>
          <Input
            size="$4"
            borderWidth={2}
            keyboardType="numeric"
            backgroundColor={colorScheme === 'dark' ? '$gray5Dark' : '$gray5Light'}
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            placeholder={`Enter Interest Rate`}
            onChangeText={(e) => setInterestRate(parseInt(e))}
          />
        </YStack>
        <YStack>
          <H4>Terms</H4>
          <Input
            size="$4"
            borderWidth={2}
            keyboardType="numeric"
            backgroundColor={colorScheme === 'dark' ? '$gray5Dark' : '$gray5Light'}
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            placeholder={`Enter Number of Years`}
            onChangeText={(e) => setTerm(parseInt(e))}
          />
        </YStack>

        <Button
          disabled={principal === 0 && term === 0 && interestRate === 0}
          onPress={calculate}
          fontSize="$6"
          backgroundColor="#818CF8"
        >
          <H4 color="#000">Calculate</H4>
        </Button>
      </YStack>

      <YStack jc="center" ai="center">
        <H2>Your Monthly EMI is</H2>
        <H2 color="$green11Dark">{emi.toFixed(2)}</H2>
      </YStack>
    </YStack>
  )
}

export default List
