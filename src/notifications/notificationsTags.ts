import { OneSignal } from "react-native-onesignal"

export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag("user_email", email)
}

export function tagUserEmailRemove() {
  OneSignal.User.removeTag("user_email")
}

interface UserInfoProps {
  name: string
  email: string
}

export function tagUserInfoCreate({ name, email }: UserInfoProps) {
  OneSignal.User.addTags({
    "user_name": name,
    "user_email": email
  })
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount)
}