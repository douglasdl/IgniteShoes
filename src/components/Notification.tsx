import { Icon } from '@/components/ui/icon'
import { HStack } from "@/components/ui/hstack"
import { Text } from '@/components/ui/text'
import { OSNotification } from 'react-native-onesignal'
import { Bell, XIcon } from "lucide-react-native"
import { Button } from '@/components/ui/button'
import { Pressable } from '@/components/ui/pressable'
import { View } from 'react-native'
import * as Linking from 'expo-linking'

type Props = {
  data: OSNotification
  onClose: () => void
}

export function Notification({ data, onClose }: Props) {

  function handleOnPress() {
    if(data.launchURL) {
      Linking.openURL(data.launchURL);
      onClose();
    }
  }

  return (
    <Pressable 
      className='w-full p-4 pt-12 bg-gray-200 absolute top-0 h-40 text-black'
      onPress={handleOnPress}
    >
      <HStack className=' p-4 justify-between items-center'>
        <Icon as={Bell} className='mr-2' size="md" color="black" />
        <View className='flex-col w-5/6 gap-2'>
          <Text className='text-black w-full text-base font-bold'>
            {data.title}
          </Text>
          <Text className='text-black w-full text-sm'>
            {data.body}
          </Text>
        </View>

        <Button
          variant="solid"   
          onPress={onClose}
          className='bg-transparent'
        >
          <View>
            <Icon as={XIcon}/>
          </View>
        </Button>
      </HStack>
    </Pressable>
  )
}