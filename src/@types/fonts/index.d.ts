import 'styled-components'
import theme from '@assets/styles'

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
