import { ImageSourcePropType, Platform, PressableProps } from 'react-native'
import { Pressable } from "@/components/ui/pressable"
import { Image } from '@/components/ui/image'

type Props = PressableProps & {
  image: ImageSourcePropType
  isActive: boolean
}

export function Brand({ image, isActive, ...rest }: Props) {
  return (
    <Pressable
      className={`mr-3 w-24 h-10 rounded-md justify-center items-center overflow-hidden ${isActive ? "border border-green-500" : "bg-gray-600"}`}
      {...rest}
    >
      <Image
        source={image}
        alt="Brand image"
        className='w-20 h-7'
        resizeMode={Platform.OS === "android" ? "contain" : "cover"}
      />
    </Pressable>
  )
}