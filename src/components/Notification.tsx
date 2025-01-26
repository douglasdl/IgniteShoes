import { CloseIcon, Icon } from '@/components/ui/icon'
import { HStack } from "@/components/ui/hstack"
import { Text } from '@/components/ui/text'
import { OSNotification } from 'react-native-onesignal'
import { Bell } from "lucide-react-native"
import { Button } from '@/components/ui/button'

type Props = {
  data: OSNotification
  onClose: () => void
}

export function Notification({ data, onClose }: Props) {
  return (
    <HStack className='w-full p-4 pt-12 justify-between items-center bg-gray-200 absolute top-0'>
        <Icon as={Bell} className='mr-2' size="xs" color="black" />

        <Text className='text-black flex-1' size="md">
          {data.title}
        </Text>

      <Button
        variant="outline"   
        onPress={onClose}
      >
        <CloseIcon />
      </Button>
    </HStack>
  )
}