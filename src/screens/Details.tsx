import { Platform } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast"
import { ScrollView } from '@gluestack-ui/themed'
import { VStack } from '@/components/ui/vstack'
import { HStack } from "@/components/ui/hstack"
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Image } from '@/components/ui/image'

import { useCart } from '../hooks/useCart'

import { PRODUCTS } from '../data/products'
import { Sizes } from '../components/Sizes'

import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ScreenHeader } from '../components/ScreenHeader'
import { ProductCardProps } from '../components/ProductCard'

type RouteParamsProps = {
  productId: string
}

export function Details() {
  const [size, setSize] = useState('35');
  const [quantity, setQuantity] = useState('1');
  const [product, setProduct] = useState<ProductCardProps>({} as ProductCardProps);

  const toast = useToast();
  const route = useRoute();
  const { navigate } = useNavigation();
  const { addProductCart } = useCart();

  const { productId } = route.params as RouteParamsProps;

  async function handleAddProductToCart() {
    try {
      await addProductCart({
        id: product.id,
        name: product.name,
        image: product.thumb,
        quantity: Number(quantity),
        size: product.size
      });

      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const uniqueToastId = "toast-" + id
          return (
            <Toast nativeID={uniqueToastId} action="muted" variant="solid">
              <ToastTitle>Produto adicionado no carrinho</ToastTitle>
              <ToastDescription>
                
              </ToastDescription>
            </Toast>
          )
        }
      });

      navigate('cart');
    } catch (error) {
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const uniqueToastId = "toast-" + id
          return (
            <Toast nativeID={uniqueToastId} action="muted" variant="solid">
              <ToastTitle>Não foi possível adicionar o produto no carrinho</ToastTitle>
              <ToastDescription>
                
              </ToastDescription>
          </Toast>
          )
        }
      });
    }
  }

  useEffect(() => {
    const selected = PRODUCTS.filter(item => item.id === productId)[0] as ProductCardProps;
    setProduct(selected);
  }, [productId]);

  return (
    <VStack className='flex-1'>
      <ScreenHeader title="Detalhes do Produto" />

      <ScrollView>
        <Image
          key={String(new Date().getTime())}
          source={product.image}
          className='w-56 h-56 self-center'
          resizeMode={Platform.OS === "android" ? "contain" : "cover"}
          alt="Imagem do produto"
        />

        <VStack className='p-6'>
          <HStack className='w-full justify-between items-center'>
            <VStack>
              <Heading className='text-white' size="xl">
                {product.name}
              </Heading>

              <Text className='text-gray-200' size="md">
                R$ {product.price}
              </Text>
            </VStack>

            <VStack className='items-end'>
              <Text className='text-gray-200 text-justify pt-2' size="sm">
                Quantidade
              </Text>

              <Input
                onChangeText={setQuantity}
                keyboardType="numeric"
                textAlign="center"
                value={quantity}
                w={14}
              />
            </VStack>
          </HStack>

          <Text className='text-gray-200 text-justify pt-2' size="md">
            {product.description}
          </Text>

          <Sizes onSelect={setSize} selected={size} />

          <Button 
            title="Adicionar no carrinho" 
            onPress={handleAddProductToCart}
          />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
