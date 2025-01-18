import 'react-native-gesture-handler'

import { SplashScreen as SplashScreenComponent } from '@components/SplashScreen'
import { CartContextProvider } from '@contexts/CartContext'
import { SearchContextProvider } from '@contexts/SearchContext'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { PortalProvider } from '@gorhom/portal'
import { Routes } from '@routes/index'
import { THEME } from '@styles/theme'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const [showContent, setShowContent] = useState(false)

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

  useEffect(() => {
    const timerSC = setTimeout(() => {
      setShowSplashScreen(false)
    }, 3000)

    const timerContent = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => {
      clearTimeout(timerSC)
      clearTimeout(timerContent)
    }
  }, [])

  if (!isFontLoaded && !hasFontError) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: THEME.COLORS.purpleDark,
        }}
      />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar translucent />

      <CartContextProvider>
        <SearchContextProvider>
          {showContent && <Routes />}
          {showSplashScreen && <SplashScreenComponent />}
        </SearchContextProvider>
      </CartContextProvider>
    </GestureHandlerRootView>
  )
}
