import { Heading, Text } from 'native-base'
import { HStack } from "@/components/ui/hstack"

type Props = {
  title: string
  counter: number
}

export function HeaderList({ title, counter }: Props) {
  return (
    <HStack className="w-full justify-between items-center px-8 mt-6">
      <Heading fontFamily="heading" color="gray.200" fontSize="md">
        {title}
      </Heading>

      <Text color="gray.200" fontSize="sm">
        {counter}
      </Text>
    </HStack>
  );
}