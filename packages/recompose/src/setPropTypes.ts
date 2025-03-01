import { ComponentType, ValidationMap } from 'react'
import { setStatic } from './setStatic.js'

export const setPropTypes = <P>(
    propTypes: ValidationMap<P>
): (<T extends ComponentType<P>>(component: T) => T) => setStatic('propTypes', propTypes)
