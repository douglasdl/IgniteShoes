import { Spinner } from 'native-base'
import { Center } from '@/components/ui/center'

export function Loading() {
  return (
    <Center className='flex-1 bg-gray-700'>
      <Spinner color="green.500" />
    </Center>
  )
}