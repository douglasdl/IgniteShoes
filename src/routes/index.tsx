import { NavigationContainer } from '@react-navigation/native'
import { 
  NotificationWillDisplayEvent, 
  OneSignal, 
  OSNotification 
} from 'react-native-onesignal'

import { AppRoutes } from './app.routes'
import { useEffect, useState } from 'react'
import { Notification } from '../components/Notification'

export function Routes() {
  const [notification, setNotification] = useState<OSNotification>()

  useEffect(() => {
    const handleNotification = (event: NotificationWillDisplayEvent): void => {
      event.preventDefault()
      const response = event.getNotification()
      setNotification(response)
    }

    OneSignal.Notifications.addEventListener("foregroundWillDisplay", handleNotification)

    return () => OneSignal.Notifications.removeEventListener("foregroundWillDisplay", handleNotification)
  }, [])

  return (
    <NavigationContainer>
      <AppRoutes />
      {
        notification?.title &&
        <Notification 
          data={notification} 
          onClose={() => setNotification(undefined)} 
        />
      }
    </NavigationContainer>
  );
}