import { FlatList } from 'react-native'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'

import { Size } from './Size';

type Props = {
  onSelect: (value: string) => void
  selected: string
}

export function Sizes({ onSelect, selected }: Props) {

  return (
    <VStack className='my-8'>
      <Heading className='text-gray-200 mb-3' size="md" >
        Tamanhos
      </Heading>

      <FlatList
        data={['35', '36', '37', '38', '39', '40', '41']}
        keyExtractor={(item: string) => item}
        renderItem={({ item }: { item: string }) => (
          <Size
            size={item}
            isActive={selected === item}
            onPress={() => onSelect(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pr-8 max-h-10 min-h-10'
      />
    </VStack>
  );
}