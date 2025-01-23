import { Button as ButtonNativeBase, IButtonProps } from 'native-base'
import { Text } from '@/components/ui/text'

type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      flex={1}
      minH={14}
      maxH={14}
      bg="green.700"
      borderWidth={0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Text className='text-white' size="sm">
        {title}
      </Text>
    </ButtonNativeBase >
  )
}