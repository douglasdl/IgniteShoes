import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { VStack } from '@/components/ui/vstack'
import { HeaderList } from './HeaderList'

import { ProductCard, ProductCardProps } from './ProductCard'
import {PRODUCTS} from '../data/products'

type Props = {
  brand: string
  data: ProductCardProps[]
}

export function Products({ data, brand }: Props) {
  const { navigate } = useNavigation();

  return (
    <VStack className='flex flex-1 min-h-full  bg-gray-700'>
      <HeaderList title={brand} counter={PRODUCTS.length} />

      <FlatList
        data={data}
        keyExtractor={(item) => (item as ProductCardProps).id}
        renderItem={({ item  }) => (
          <ProductCard 
            data={item as ProductCardProps}
            onPress={() => navigate('details', { productId: (item as ProductCardProps).id })} 
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 20
        }}
      />
    </VStack>
  );
}