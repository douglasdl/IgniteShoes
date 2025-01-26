import { FlatList } from 'react-native'
import { Brand } from './Brand'
import { BRANDS, BrandProps } from '../data/brands'
import { ImageSourcePropType } from 'react-native'

type Props = {
  onSelect: (value: string) => void
  selected: string
}

export function Brands({ onSelect, selected }: Props) {

  return (
    <FlatList
      data={BRANDS as BrandProps[]}
      keyExtractor={(item) => (item as BrandProps).id}
      renderItem={({ item }) => {
        const brand = item as BrandProps;
        return (
          <Brand
            image={brand.image as ImageSourcePropType}
            isActive={selected === brand.name}
            onPress={() => onSelect(brand.name)}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className='mt-10 max-h-10 min-h-10 px-8'
    />
  );
}