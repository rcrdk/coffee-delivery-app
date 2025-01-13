import { THEME } from '@styles/theme'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from './components/Header'
import { TopBar } from './components/TopBar'
import { styles } from './styles'

export function Catalog() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: THEME.COLORS.gray100 }}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: THEME.COLORS.white,
      }}
      automaticallyAdjustKeyboardInsets
    >
      <SafeAreaView style={styles.topContainer} edges={['top']}>
        <TopBar />
        <Header />
        {/* Offset area */}
        <View style={{ height: 113 }} />
      </SafeAreaView>
    </ScrollView>
  )
}
