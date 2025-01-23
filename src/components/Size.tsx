import { PressableProps } from 'react-native'
import { Text } from '@/components/ui/text'
import { Pressable } from "@/components/ui/pressable"

type Props = PressableProps & {
  size: string
  isActive: boolean
}

export function Size({ size, isActive, ...rest }: Props) {
  return (
    <Pressable
      className={`mr-3 w-10 h-10 rounded-sm justify-center items-center overflow-hidden ${isActive ? "border border-green-500" : "bg-gray-600"}`}
      {...rest}
    >
      <Text className={isActive ? "text-green-500" : "text-gray-200"} size="xs">
        {size}
      </Text>
    </Pressable>
  )
}