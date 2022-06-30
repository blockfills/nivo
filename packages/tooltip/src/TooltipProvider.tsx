import { PropsWithChildren, MutableRefObject } from 'react'
import { TooltipActionsContext, TooltipStateContext } from './context.js'
import { useTooltipHandlers } from './hooks.js'

interface TooltipProviderProps {
    container: MutableRefObject<HTMLDivElement>
}

export const TooltipProvider = ({
    container,
    children,
}: PropsWithChildren<TooltipProviderProps>) => {
    const { actions, state } = useTooltipHandlers(container)

    return (
        <TooltipActionsContext.Provider value={actions}>
            <TooltipStateContext.Provider value={state}>{children}</TooltipStateContext.Provider>
        </TooltipActionsContext.Provider>
    )
}
