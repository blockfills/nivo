import { BasicTooltip } from '@nivo/tooltip'
import { InputNode, NodeTooltipProps } from './types.js'

export const NetworkNodeTooltip = <Node extends InputNode>({ node }: NodeTooltipProps<Node>) => (
    <BasicTooltip id={node.id} enableChip={true} color={node.color} />
)
