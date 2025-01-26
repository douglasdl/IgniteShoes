import { HeaderList } from './HeaderList'
import { FlatList, View } from 'react-native'
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
import { StorageCartProps } from '../storage/storageCart';

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
            <Toast nativeID={uniqueToastId} action="muted" variant="solid" className='bg-green-500 top-20'>
              <ToastTitle>Produto removido</ToastTitle>
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
            <Toast nativeID={uniqueToastId} action="muted" variant="solid" className='bg-red-500 top-20'>
              <ToastTitle>Não foi possível remover o produto</ToastTitle>
            </Toast>
          )
        }
      });
    }
  }

  return (
    <VStack className='flex-1 justify-between h-full'>
      <HeaderList title="Produtos" counter={cart.length} />

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCartCard
            data={item}
            onRemove={() => handleItemRemove(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        className='pb-20 px-8 mt-2'
        contentContainerStyle={{
          alignItems: "center"
        }}
      />

      {
        cart.length > 0 &&
        <View className='w-full h-20 px-8'>
          <Button title="Finalizar compra" />
        </View>
      }
    </VStack>
  );
}