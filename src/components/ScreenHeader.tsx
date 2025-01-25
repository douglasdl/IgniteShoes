import { useNavigation } from '@react-navigation/native'
import { Icon, ArrowLeftIcon } from '@/components/ui/icon'
import { Heading } from '@/components/ui/heading'
import { Box } from '@/components/ui/box'
import { HStack } from "@/components/ui/hstack"
import { Pressable } from 'react-native'

type Props = {
  title: string
}

export function ScreenHeader({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <HStack className='bg-gray-600 pb-6 pt-16 justify-between px-6'>
      <Pressable onPress={goBack}>
        <Icon as={ArrowLeftIcon} size="xs" color="green-500" />
      </Pressable>


      <Heading className='text-gray-100' size="xl">
        {title}
      </Heading>

      <Box className='w-6 h-6' />
    </HStack>
  )
}