import { PortalProvider } from '@gorhom/portal'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { THEME } from '@styles/theme'

import { AppRoutes } from './app.routes'

export function Routes() {
  const navigatonTheme = DefaultTheme
  navigatonTheme.colors.background = THEME.COLORS.white

  return (
    <NavigationContainer theme={navigatonTheme}>
      <PortalProvider>
        <AppRoutes />
      </PortalProvider>
    </NavigationContainer>
  )
}
