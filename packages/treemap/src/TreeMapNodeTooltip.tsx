import { memo } from 'react'
import { BasicTooltip } from '@nivo/tooltip'
import { TooltipProps } from './types.js'

const NonMemoizedTreeMapNodeTooltip = <Datum extends object>({ node }: TooltipProps<Datum>) => (
    <BasicTooltip id={node.id} value={node.formattedValue} enableChip={true} color={node.color} />
)

export const TreeMapNodeTooltip = memo(
    NonMemoizedTreeMapNodeTooltip
) as typeof NonMemoizedTreeMapNodeTooltip
