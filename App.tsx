import { StatusBar, Platform } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { OneSignal } from 'react-native-onesignal';

import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserEmailCreate, tagUserEmailRemove, tagUserInfoCreate } from './src/notifications/notificationsTags';

import { ONESIGNAL_APP_ID_IOS, ONESIGNAL_APP_ID_ANDROID, USER_EMAIL, USER_NAME } from '@env';

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