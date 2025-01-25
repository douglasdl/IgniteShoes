import { FlatList } from '@gluestack-ui/themed'
import { Brand } from './Brand'
import { BRANDS, BrandProps } from '../data/brands'
import { ImageSourcePropType } from 'react-native';

type Props = {
  onSelect: (value: string) => void;
  selected: string;
}

export function Brands({ onSelect, selected }: Props) {

  return (
    <FlatList
      data={BRANDS}
      keyExtractor={(item: BrandProps) => item.id}
      renderItem={( item: BrandProps ) => (
        <Brand
          image={item.image as ImageSourcePropType}
          isActive={selected === item.name}
          onPress={() => onSelect(item.name)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 8 }}
      mt={10}
      maxH={10}
      minH={10}
    />
  );
}