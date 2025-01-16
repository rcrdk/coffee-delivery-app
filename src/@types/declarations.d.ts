import type { SvgProps as DefaultSvgProps } from 'react-native-svg'

declare module 'react-native-svg' {
  interface SvgProps extends DefaultSvgProps {
    className?: string
  }
}

declare module '*.svg' {
  import type React from 'react'
  import type { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module '*.png'
