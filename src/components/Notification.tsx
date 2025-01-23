import { IconButton, CloseIcon, Icon } from 'native-base'
import { HStack } from "@/components/ui/hstack"
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import { OSNotification } from 'react-native-onesignal'

type Props = {
  data: OSNotification
  onClose: () => void
}

export function Notification({ data, onClose }: Props) {
  return (
    <HStack className='w-full p-4 pt-12 justify-between items-center bg-gray-200 absolute top-0'>
        <Icon as={Ionicons} name="notifications-outline" size={5} color="black" mr={2}/>

        <Text className='text-black flex-1' size="md">
          {data.title}
        </Text>

      <IconButton 
        variant="unstyled" 
        _focus={{ borderWidth: 0 }} 
        icon={<CloseIcon size="3" />} 
        _icon={{ color: "coolGray.600"}} 
        color="black"
        onPress={onClose}
      />
    </HStack>
  )
}