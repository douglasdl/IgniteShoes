import { Icon } from '@/components/ui/icon'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { HStack } from "@/components/ui/hstack"
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'
import { Text } from '@/components/ui/text'
import { LogOut } from "lucide-react-native"

import userPhotoDefault from "../assets/userPhotoDefault.png"

export function HomeHeader() {
  return (
    <HStack className='pt-16 pb-5 px-8 bg-gray-600 items-center'>
      <Avatar className='w-16 h-1-6 mr-4 border-2 border-gray-400'>
        <AvatarImage source={userPhotoDefault} />
      </Avatar>    

      <VStack className='flex-1'>
        <Text className='text-gray-100' size="md">
          Olá,
        </Text>

        <Heading className='text-gray-100' size="md">
          Douglas Dias Leal
        </Heading>
      </VStack>

      <Icon
        as={LogOut}
        size="lg"
        className='text-gray-200'
      />
    </HStack>
  )
}