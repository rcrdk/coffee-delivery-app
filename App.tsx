import { CartContextProvider } from '@contexts/CartContext'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Routes } from '@routes/index'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { StatusBar } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isFontLoaded, hasFontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  useEffect(() => {
    if (isFontLoaded || hasFontError) {
      SplashScreen.hideAsync()
    }
  }, [hasFontError, isFontLoaded])

  if (!isFontLoaded && !hasFontError) {
    return null
  }

  return (
    <>
      <StatusBar translucent />

      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </>
  )
}
