# IgniteShoes
Ignite Shoes App

Install the dependencies:
```sh
npm i
```

Start the project:
```sh
npx expo start
```

## Update to Expo SDK52

```sh
npm install expo@latest
npx expo install --fix
npx gluestack-ui init
```

Publish:
```sh
npx expo-doctor
eas build:configure
eas build -p android --profile preview --local
eas build -p android --profile preview
eas build -p ios --profile preview --local
eas build -p ios --profile preview
```