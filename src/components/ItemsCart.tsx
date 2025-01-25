import { HeaderList } from './HeaderList'
import { FlatList } from 'native-base'
import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast"
import { VStack } from '@/components/ui/vstack'

import { useCart } from '../hooks/useCart';

import { ItemCartCard } from './ItemCartCard';
import { Button } from '../components/Button'

export function ItemsCart() {
  const { cart, removeProductCart } = useCart();
  const toast = useToast();

  async function handleItemRemove(productId: string) {
    try {
      await removeProductCart(productId);

      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const uniqueToastId = "toast-" + id
          return (
            <Toast nativeID={uniqueToastId} action="muted" variant="solid">
              <ToastTitle>Produto removido</ToastTitle>
              <ToastDescription>
                
              </ToastDescription>
            </Toast>
          )
        }
      });

    } catch (error) {
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const uniqueToastId = "toast-" + id
          return (
            <Toast nativeID={uniqueToastId} action="muted" variant="solid">
              <ToastTitle>Não foi possível remover o produto</ToastTitle>
              <ToastDescription>
                
              </ToastDescription>
            </Toast>
          )
        }
      });
    }
  }

  return (
    <VStack className='flex-1'>
      <HeaderList title="Produtos" counter={cart.length} />

      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemCartCard
            data={item}
            onRemove={() => handleItemRemove(item.id)}
          />
        )}
        _contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        px={8}
        mt={2}
      />

      {
        cart.length > 0 &&
        <Button title="Finalizar compra" />
      }
    </VStack>
  );
}