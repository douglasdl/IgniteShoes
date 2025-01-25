import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@/components/ui/icon'
import { HomeIcon, ShoppingBag } from "lucide-react-native"
import { Cart } from '../screens/Cart'
import { Home } from '../screens/Home'
import { Details } from '../screens/Details'

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "green-500",
        tabBarInactiveTintColor: "gray-300",
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "gray-800"
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