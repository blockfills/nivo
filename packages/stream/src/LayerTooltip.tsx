import { BasicTooltip } from '@nivo/tooltip'
import { TooltipProps } from './types.js'

export const LayerTooltip = ({ layer }: TooltipProps) => (
    <BasicTooltip id={layer.label} enableChip={true} color={layer.color} />
)
