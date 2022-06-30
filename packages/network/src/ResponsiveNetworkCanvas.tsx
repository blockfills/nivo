import { ResponsiveWrapper } from '@nivo/core'
import { NetworkCanvasProps, InputNode, InputLink } from './types.js'
import { NetworkCanvas } from './NetworkCanvas.js'

export const ResponsiveNetworkCanvas = <
    Node extends InputNode = InputNode,
    Link extends InputLink = InputLink
>(
    props: Omit<NetworkCanvasProps<Node, Link>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => (
            <NetworkCanvas<Node, Link> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
