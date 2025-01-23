import { Text } from 'native-base'
import { HStack } from "@/components/ui/hstack"
import { Heading } from '@/components/ui/heading'

type Props = {
  title: string
  counter: number
}

export function HeaderList({ title, counter }: Props) {
  return (
    <HStack className="w-full justify-between items-center px-8 mt-6">
      <Heading className='text-gray-200 font' size="md">
        {title}
      </Heading>

      <Text color="gray.200" fontSize="sm">
        {counter}
      </Text>
    </HStack>
  );
}