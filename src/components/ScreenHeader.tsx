import { useNavigation } from '@react-navigation/native'
import { Icon } from 'native-base'
import { Heading } from '@/components/ui/heading'
import { Box } from '@/components/ui/box'
import { HStack } from "@/components/ui/hstack"
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

type Props = {
  title: string
}

export function ScreenHeader({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <HStack className='bg-gray-600 pb-6 pt-16 justify-between px-6'>
      <Pressable onPress={goBack}>
        <Icon as={Feather} name="arrow-left" size={6} color="green.500" />
      </Pressable>


      <Heading className='text-gray-100' size="xl">
        {title}
      </Heading>

      <Box className='w-6 h-6' />
    </HStack>
  )
}