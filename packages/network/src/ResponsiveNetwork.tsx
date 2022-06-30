import { ResponsiveWrapper } from '@nivo/core'
import { InputLink, InputNode, NetworkSvgProps } from './types.js'
import { Network } from './Network.js'

export const ResponsiveNetwork = <
    Node extends InputNode = InputNode,
    Link extends InputLink = InputLink
>(
    props: Omit<NetworkSvgProps<Node, Link>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <Network<Node, Link> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
