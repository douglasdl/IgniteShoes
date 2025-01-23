import { VStack } from '@/components/ui/vstack'

import { ItemsCart } from '../components/ItemsCart'
import { ScreenHeader } from '../components/ScreenHeader'

export function Cart() {
  return (
    <VStack className='flex-1'>
      <ScreenHeader title="Carrinho" />
      <ItemsCart />
    </VStack>
  );
}