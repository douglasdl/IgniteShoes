import { Feather } from '@expo/vector-icons'
import { Platform, TouchableOpacity } from 'react-native'
import { Image, Heading, Text, Icon } from 'native-base'
import { VStack } from '@/components/ui/vstack'
import { HStack } from "@/components/ui/hstack"

import { StorageCartProps } from '../storage/storageCart'

type Props = {
  onRemove: () => void;
  data: StorageCartProps;
}

export function ItemCartCard({ data, onRemove }: Props) {
  return (
    <HStack className='w-full h-20 bg-gray-500 rounded-md items-center px-4 mb-2'>
      <Image w={16} h={16} source={data.image} alt="Imagem do produto" resizeMode={Platform.OS === "android" ? "contain" : "cover"} />

      <VStack className='flex-1 ml-2'>
        <Heading color="white" fontFamily="heading" fontSize="lg" mt={2}>
          {data.name}
        </Heading>

        <Text color="gray.200" fontSize="sm">
          {data.quantity} unidades
        </Text>
      </VStack>

      <TouchableOpacity onPress={onRemove}>
        <Icon as={Feather} name="trash" size={6} color="red.500" />
      </TouchableOpacity>
    </HStack>
  );
}