import { ComponentType } from 'react'
import { setDisplayName } from './setDisplayName.js'
import { shallowEqual } from './shallowEqual.js'
import { shouldUpdate } from './shouldUpdate.js'
import { wrapDisplayName } from './wrapDisplayName.js'

export const pure = <TProps>(component: ComponentType<TProps>): ComponentType<TProps> => {
    const hoc = shouldUpdate((props, nextProps) => !shallowEqual(props, nextProps))

    if (process.env.NODE_ENV !== 'production') {
        return setDisplayName(wrapDisplayName(component, 'pure'))(hoc(component))
    }

    return hoc(component)
}
