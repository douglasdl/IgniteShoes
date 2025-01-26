import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

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
  data: ProductCardProps
}

export function ProductCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <VStack className='w-40 h-40 bg-gray-500 rounded-md items-center p-2 m-2'>
        <Image 
          source={data.thumb} 
          alt="Imagem do produto" 
          className='flex-1' 
          resizeMode="cover" 
        />

        <Heading className='text-white mt-2' size="lg">
          {data.name}
        </Heading>

        <Text className='text-gray-200' size="sm">
          R$ {data.price}
        </Text>
      </VStack>
    </TouchableOpacity>
  )
}