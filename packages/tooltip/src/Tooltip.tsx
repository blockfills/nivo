import { useTooltipState } from './hooks.js'
import { TooltipWrapper } from './TooltipWrapper.js'
import { TooltipStateContextData, TooltipStateContextDataVisible } from './context.js'

export const isVisibleTooltipState = (
    state: TooltipStateContextData
): state is TooltipStateContextDataVisible => state.isVisible

export const Tooltip = () => {
    const state = useTooltipState()

    if (!isVisibleTooltipState(state)) {
        return null
    }

    return (
        <TooltipWrapper position={state.position} anchor={state.anchor}>
            {state.content}
        </TooltipWrapper>
    )
}
