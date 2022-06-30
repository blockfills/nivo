import { createFactory } from 'react'
import { setDisplayName } from './setDisplayName.js'
import { InferableComponentEnhancerWithProps, Mapper } from './types.js'
import { wrapDisplayName } from './wrapDisplayName.js'

export const mapProps =
    <TInner, TOuter>(
        propsMapper: Mapper<TOuter, TInner>
    ): InferableComponentEnhancerWithProps<TInner, TOuter> =>
    (BaseComponent: any): any => {
        const factory = createFactory(BaseComponent)
        const MapProps = (props: any) => factory(propsMapper(props))
        if (process.env.NODE_ENV !== 'production') {
            return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps)
        }
        return MapProps
    }
