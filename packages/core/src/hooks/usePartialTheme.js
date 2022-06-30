import { useMemo } from 'react'
import { defaultTheme, extendDefaultTheme } from '../theming.js'

export const usePartialTheme = partialTheme =>
    useMemo(() => extendDefaultTheme(defaultTheme, partialTheme), [partialTheme])
