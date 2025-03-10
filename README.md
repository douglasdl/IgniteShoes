# IgniteShoes
Ignite Shoes App

# Push Notifications and Deep Linking

## Create links and push notifications

### 1) Introduction

#### Welcome

#### Base Project

- [Github template](https://github.com/rocketseat-education/igniteshoesapp)

Install the dependencies:
```sh
npm i
```

Start the project:
```sh
npx expo start
```

##### Update to Expo SDK52

```sh
npm install expo@latest
npx expo install --fix
npx gluestack-ui init
```

#### Knowing the Project

### 2) Firebase Cloud Messaging

#### Android Deploying

#### Knowing the FCM

- [FCM Documentation](https://firebase.google.com/docs/cloud-messaging)

#### Create a Project in the FCM

- [Firebase](https://firebase.google.com)

- Login

- [Go to console](https://console.firebase.google.com)

#### OneSignal Update

#### Activate the Firebase Cloud Messaging

- Visão Geral do Projeto > Configurações do Projeto

- Cloud Messaging
    API Firebase Cloud Messaging (V1) - Ativado

- Contas de Serviço
    SDK Admin do Firebase > Gerar nova chave privada > Gerar chave

### 3) OneSignal

#### Notifications with OneSignal

#### Knowing the OneSignal

- [OneSignal](https://onesignal.com)

#### Create the Android Project

- Login

- Settings > Push Settings > Google Android (FCM) > Continue

- Add the JSON file > Save & Continue

- React Native / Expo > Save & Continue

#### Install the OneSignal

- [Docs](https://documentation.onesignal.com/docs/react-native-sdk-setup)

Install the OneSignal Expo plugin using the Expo CLI:
```sh
npx expo install onesignal-expo-plugin
```

Install the SDK:
```sh
npm install --save react-native-onesignal
```

### 4) Expo Dev Client

#### Native Code

#### Workflows

- Manager Workflow: automatic configurations.
- Bare Workflow: manual configurations. Expose the "ios" and "android" folders to edit the native code.

#### Expo Prebuild

Convert the project from Manager workflow to Bare workflow:
```sh
npx expo prebuild
```

#### Native Configs

- [React Native Documentation](https://react-native.rocketseat.dev/)

#### Run Out of Expo

Run the application:
```sh
npx expo run:android
```

#### Using Expo Dev Client

- [Documentation](https://docs.expo.dev/versions/latest/sdk/dev-client/)

Install the dependencies:
```sh
npx expo install expo-dev-client
```

Run the application:
```sh
npx expo start --dev-client
```

#### Knowing More the Custom Development Client

```sh
npx expo start
```

### 5) Apple Push Notifications

#### Knowing the APNS

- APNs: Apple Push Notification service
- Need Apple Development Account ([Documentation](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns))

#### Create the Project in the APNs

- Dashboard > Create new project
- Next: Configure Your Platform
- [Documentation](https://documentation.onesignal.com/docs/ios-p8-token-based-connection-to-apns)

#### Generate the Apple Certificate

- Command + Space > Keychain Access
- Keychain Access > Certificate Assistant > Request a Certificate from a Certificate Authority...
- Save the JSON file
- On Apple Developper Account:
    - Certificates, Identifiers & Profiles > Create a New Certificate
    - Apple Push Notification service SSL (Sandbox & Production) > Continue
    - Select the App ID > Continue
    - Choose File > Upload > Continue > Download
    - Double click in the "aps.cer" file
    - My Certificates > Double-click
    - Trust > When using this certificate > Always Trust
    - Close
    - Right-Click > Export "Apple Push Services: ..." > Save
    - Add the password for the file.
- On the OneSignal:
    - Upload the certificate
    - Save
    
#### Run and Test the integration

```sh
npx expo run:ios
```

### 6) Push Notifications

#### Sending Messages

#### Background Messages

#### Sending the fisrt message on Android

#### Sending the fisrt message on iOS

#### Sending message to segments

#### Using Tags to identify a user

#### Sending message filtered by tag

#### Removing tag

#### Make dynamic message with tags

#### Priorities and Notification Channels

#### Create Notification Channels on Android

#### Send a message by a channel

#### Foreground concept

- Foreground
- Background
- Quit

#### Receive a Foreground message

#### Using the Notification component

#### Send Data in the Notification

#### Check the click in the background Notificação

#### Add Action Buttons

#### Gete the Selected Option

#### Messages Delivery Schedule

#### Add

### 7) Deep Linking

#### Starting [Deep Linking](https://reactnavigation.org/docs/deep-linking/)

#### Add and List Schemes

Add the Schema config to the native codes:
```sh
npx expo prebuild
```

Show the scheme:
```sh
npx uri-scheme list
```

```sh
 iOS: Schemes for config: ./ios/igniteshoesapp/Info.plist
› igniteshoesapp://
› com.douglasdl87.igniteshoesapp://
› exp+igniteshoesapp://

› Android: Schemes for config: ./android/app/src/main/AndroidManifest.xml
› com.douglasdl87.igniteshoesapp://
› com.lojaoshop.igniteshoes://
› igniteshoesapp://
› exp+igniteshoesapp://
```

```sh
npx expo run:android
```

#### Run the Deep Linking

Open the app using the deeplink:
```sh
npx uri-scheme open igniteshoesapp://192.168.3.105:8081 --android
```

#### Config the Depp Linking Navigation

List the scheme:
```sh
npx uri-scheme list
```

Open the details page using Depp Linking:
```sh
npx uri-scheme open igniteshoesapp://details/7 --ios
```

#### Deep Linking in the Push Notification

#### Deep Linking with parameters in the Push Notification

#### Handle the Deep Linking with the App in foreground

Install the dependencies:
```sh
npx expo install expo-linking
```

#### Abandoned Cart Concept

#### Create tag for the Cart

#### Remove the item from the cart

#### Create Abandonated Cart Segment

#### Sending Notifications for a Segment

#### Add Badge in the Menu

#### Module Ending

Publish:
```sh
npx expo-doctor
eas build:configure
npx expo install expo-updates
eas update:configure

eas build -p android --profile preview --local
eas build -p android --profile preview
eas build -p ios --profile preview --local
eas build -p ios --profile preview

eas build -p android --profile production --message "first production deploy"
eas build -p ios --profile production --message "first production deploy"

eas submit --platform android
eas submit --platform ios

eas update --branch preview --message "update details"
```

## Migrate to Gluestack UI

```sh
npx gluestack-ui add box
npx gluestack-ui add center
npx gluestack-ui add hstack
npx gluestack-ui add vstack
npx gluestack-ui add heading
npx gluestack-ui add text
npx gluestack-ui add spinner
npx gluestack-ui add button
npx gluestack-ui add input
npx gluestack-ui add pressable
npx gluestack-ui add avatar
npx gluestack-ui add image
npx gluestack-ui add icon
npx gluestack-ui add toast
npm add @gluestack-style/react
npm install nativewind @gluestack-ui/nativewind-utils tailwindcss
```

Remove Deprecated Feather Icons
Add [Lucide](https://lucide.dev/guide/packages/lucide-react-native) Icons ([icons list](https://lucide.dev/icons/)).
```sh
npm install lucide-react-native
```