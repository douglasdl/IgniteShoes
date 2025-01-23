import { Platform } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Heading, Image, ScrollView, Text, useToast } from 'native-base'
import { VStack } from '@/components/ui/vstack'
import { HStack } from "@/components/ui/hstack"

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
        title: 'Produto adicionado no carrinho',
        placement: 'top',
        bgColor: 'green.500'
      });

      navigate('cart');
    } catch (error) {
      toast.show({
        title: 'Não foi possível adicionar o produto no carrinho',
        placement: 'top',
        bgColor: 'reed.500'
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
          w={56}
          h={56}
          resizeMode={Platform.OS === "android" ? "contain" : "cover"}
          alt="Imagem do produto"
          alignSelf="center"
        />

        <VStack className='p-6'>
          <HStack className='w-full justify-between items-center'>
            <VStack>
              <Heading color="white" fontFamily="heading" fontSize="xl">
                {product.name}
              </Heading>

              <Text color="gray.200" fontSize="md" fontFamily="heading">
                R$ {product.price}
              </Text>
            </VStack>

            <VStack className='items-end'>
              <Text color="gray.200" fontSize="sm" textAlign="justify" pt={2}>
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

          <Text color="gray.200" fontSize="md" textAlign="justify" pt={2}>
            {product.description}
          </Text>

          <Sizes onSelect={setSize} selected={size} />

          <Button title="Adicionar no carrinho" onPress={handleAddProductToCart} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
