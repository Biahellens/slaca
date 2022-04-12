
import React from 'react'
import { ThemeProvider as ProviderTheme } from 'styled-components'

import { theme } from './theme'

type WithChildren = {
  children: React.ReactNode | React.ReactNode[]
}

export const ThemeProvider = ({ children }: WithChildren) => {
  return (
    <ProviderTheme theme={theme}>
      {children}
    </ProviderTheme>
  )
}

export default ThemeProvider
