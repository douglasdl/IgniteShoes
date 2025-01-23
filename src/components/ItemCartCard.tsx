import { Feather } from '@expo/vector-icons'
import { Platform, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import { HStack } from "@/components/ui/hstack"
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

import { StorageCartProps } from '../storage/storageCart'

type Props = {
  onRemove: () => void
  data: StorageCartProps
}

export function ItemCartCard({ data, onRemove }: Props) {
  return (
    <HStack className='w-full h-20 bg-gray-500 rounded-md items-center px-4 mb-2'>
      <Image
        className='w-16 h-16' 
        source={data.image} 
        alt="Imagem do produto" 
        resizeMode={Platform.OS === "android" ? "contain" : "cover"} 
      />

      <VStack className='flex-1 ml-2'>
        <Heading className='text-white mt-2' size="lg">
          {data.name}
        </Heading>

        <Text className='text-gray-200' size="sm">
          {data.quantity} unidades
        </Text>
      </VStack>

      <TouchableOpacity onPress={onRemove}>
        <Icon as={Feather} name="trash" size={6} color="red.500" />
      </TouchableOpacity>
    </HStack>
  );
}