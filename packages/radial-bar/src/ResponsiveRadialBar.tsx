import { ResponsiveWrapper } from '@nivo/core'
import { RadialBarDatum, RadialBarSvgProps } from './types.js'
import { RadialBar } from './RadialBar.js'

export const ResponsiveRadialBar = <D extends RadialBarDatum = RadialBarDatum>(
    props: Omit<RadialBarSvgProps<D>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <RadialBar<D> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
