import { ResponsiveWrapper } from '@nivo/core'
import { FunnelDatum, FunnelSvgProps } from './types.js'
import { Funnel } from './Funnel.js'

export const ResponsiveFunnel = <D extends FunnelDatum = FunnelDatum>(
    props: Omit<FunnelSvgProps<D>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <Funnel<D> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
