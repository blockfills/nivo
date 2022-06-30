import { ComponentType } from 'react'
import { setStatic } from './setStatic.js'

export const setDisplayName = (
    displayName: string
): (<T extends ComponentType<any>>(component: T) => T) => setStatic('displayName', displayName)
