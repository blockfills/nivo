import { mapProps } from './mapProps.js'
import { setDisplayName } from './setDisplayName.js'
import { InferableComponentEnhancerWithProps, Mapper } from './types.js'
import { wrapDisplayName } from './wrapDisplayName.js'

export const withProps = <TInner, TOuter>(
    createProps: TInner | Mapper<TOuter, TInner>
): InferableComponentEnhancerWithProps<TInner & TOuter, TOuter> => {
    const hoc = mapProps(props => ({
        ...(props as any),
        // eslint-disable-next-line @typescript-eslint/ban-types
        ...(typeof createProps === 'function' ? (createProps as Function)(props) : createProps),
    }))
    if (process.env.NODE_ENV !== 'production') {
        return ((BaseComponent: any) =>
            setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc(BaseComponent))) as any
    }
    return hoc as InferableComponentEnhancerWithProps<TInner & TOuter, TOuter>
}
