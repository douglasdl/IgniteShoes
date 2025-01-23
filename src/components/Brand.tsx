import { ImageSourcePropType, Platform } from 'react-native'
import { IPressableProps, Image } from 'native-base'
import { Pressable } from "@/components/ui/pressable"

type Props = IPressableProps & {
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
        w={20}
        h={7}
        resizeMode={Platform.OS === "android" ? "contain" : "cover"}
      />
    </Pressable>
  )
}