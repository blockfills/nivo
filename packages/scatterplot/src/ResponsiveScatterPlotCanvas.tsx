import { ResponsiveWrapper } from '@nivo/core'
import { ScatterPlotCanvas } from './ScatterPlotCanvas.js'
import { ScatterPlotCanvasProps, ScatterPlotDatum } from './types.js'

export const ResponsiveScatterPlotCanvas = <RawDatum extends ScatterPlotDatum>(
    props: Omit<ScatterPlotCanvasProps<RawDatum>, 'width' | 'height'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => (
            <ScatterPlotCanvas<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
