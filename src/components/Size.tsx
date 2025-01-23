import { Pressable, IPressableProps } from 'native-base'
import { Text } from '@/components/ui/text'

type Props = IPressableProps & {
  size: string
  isActive: boolean
}

export function Size({ size, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={10}
      h={10}
      bg="gray.600"
      rounded="xs"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1
      }}
      {...rest}
    >
      <Text className={isActive ? "text-green-500" : "text-gray-200"} size="xs">
        {size}
      </Text>
    </Pressable>
  )
}