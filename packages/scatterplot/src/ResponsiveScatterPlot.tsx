import { ResponsiveWrapper } from '@nivo/core'
import { ScatterPlot } from './ScatterPlot.js'
import { ScatterPlotDatum, ScatterPlotSvgProps } from './types.js'

export const ResponsiveScatterPlot = <RawDatum extends ScatterPlotDatum>(
    props: Omit<ScatterPlotSvgProps<RawDatum>, 'width' | 'height'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <ScatterPlot<RawDatum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
