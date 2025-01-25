import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@/components/ui/icon'
import { HomeIcon, ShoppingBag } from "lucide-react-native"

import { useTheme } from 'native-base'

import { Cart } from '../screens/Cart'
import { Home } from '../screens/Home'
import { Details } from '../screens/Details'

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.gray[800]
        },
      }}>
      <Screen
        name="products"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icon as={HomeIcon} color={color} size="md" />
        }}
      />

      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => <Icon as={ShoppingBag} color={color} size="md" />,
        }}
      />

      <Screen
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}