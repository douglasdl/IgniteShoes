import { Feather } from '@expo/vector-icons'
import { Icon, Text, Avatar } from "native-base"
import { HStack } from "@/components/ui/hstack"
import { Heading } from '@/components/ui/heading'

import userPhotoDefault from "../assets/userPhotoDefault.png";
import { VStack } from '@/components/ui/vstack'

export function HomeHeader() {
  return (
    <HStack className='pt-16 pb-5 px-8 bg-gray-600 items-center'>
      <Avatar
        source={userPhotoDefault}
        size={16}
        mr={4}
        borderWidth={2}
        borderColor="gray.400"
      />

      <VStack className='flex-1'>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading className='text-gray-100' size="md">
          Douglas Dias Leal
        </Heading>
      </VStack>

      <Icon
        as={Feather}
        name="log-out"
        color="gray.200"
        size={7}
      />
    </HStack>
  );
}