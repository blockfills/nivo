import { ComponentType } from 'react'
import { getDisplayName } from './getDisplayName.js'

export const wrapDisplayName = (BaseComponent: ComponentType<any>, hocName: string): string =>
    `${hocName}(${getDisplayName(BaseComponent)})`
