import { ButtonProps } from 'react-native'
import { Button as ButtonGluestack, ButtonText } from "@/components/ui/button"

type Props = ButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonGluestack className='flex-1 min-h-14 max-h-14 bg-green-700 border-0 border-green-500 rounded-sm hover:bg-green-500'
    {...rest}
    >
      <ButtonText className='text-white' size="sm">
        {title}
      </ButtonText>
    </ButtonGluestack >
  )
}