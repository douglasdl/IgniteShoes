import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Image, Text } from 'native-base'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'

export type ProductCardProps = {
  id: string
  brand: string
  name: string
  price: string
  thumb: ImageSourcePropType
  image: ImageSourcePropType
  quantity: number
  size: number
  description: string
}

type Props = TouchableOpacityProps & {
  data: ProductCardProps;
}

export function ProductCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <VStack className='w-40 h-40 bg-gray-500 rounded-md items-center p-2 m-2'>
        <Image source={data.thumb} alt="Imagem do produto" flex={1} resizeMode="cover" />

        <Heading className='text-white mt-2' size="lg">
          {data.name}
        </Heading>

        <Text color="gray.200" fontSize="sm">
          R$ {data.price}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}