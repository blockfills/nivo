import { Bar } from './Bar.js'
import { BarDatum, BarSvgProps } from './types.js'
import { ResponsiveWrapper } from '@nivo/core'

export const ResponsiveBar = <RawDatum extends BarDatum>(
    props: Omit<BarSvgProps<RawDatum>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <Bar<RawDatum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
