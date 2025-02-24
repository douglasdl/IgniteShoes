import { StatusBar, Platform } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NotificationClickEvent, OneSignal } from 'react-native-onesignal';

import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserEmailCreate, tagUserEmailRemove, tagUserInfoCreate } from './src/notifications/notificationsTags';
import { useEffect } from 'react';

const ONESIGNAL_APP_ID_IOS = "bedd5c16-094f-416d-af91-73df3e55cd3f";
const ONESIGNAL_APP_ID_ANDROID = "ab2d5db2-f89b-4d8f-bd35-1eb71b40d66f";
const USER_NAME = "douglas_san@hotmail.com";
const USER_EMAIL = "Douglas Dias Leal";

const oneSignalAppId = Platform.OS === "ios" 
  ? ONESIGNAL_APP_ID_IOS 
  : ONESIGNAL_APP_ID_ANDROID;

OneSignal.initialize(oneSignalAppId);
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // tagUserEmailCreate(USER_EMAIL)
  // tagUserEmailRemove()
  tagUserInfoCreate({ name: USER_NAME, email: USER_EMAIL })

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent): void => {
      const { actionId } = event.result

      switch (actionId) {
        case "1":
          console.log("Ver todos");
          break;
        case "2":
          console.log("Ver pedido");
          break;
          
        default:
          console.log("Nenhum botão de ação selecionado");
          break;
      }
    }
    
    OneSignal.Notifications.addEventListener("click", handleNotificationClick)

    return () => OneSignal.Notifications.removeEventListener("click", handleNotificationClick)
  }, [])

  return (
    <GluestackUIProvider mode="light">
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <CartContextProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </CartContextProvider>
      </GluestackUIProvider>
  );
}