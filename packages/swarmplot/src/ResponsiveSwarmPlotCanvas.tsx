import { ResponsiveWrapper } from '@nivo/core'
import { SwarmPlotCanvasProps } from './types.js'
import { SwarmPlotCanvas } from './SwarmPlotCanvas.js'

type ResponsiveSwarmPlotCanvasProps<RawDatum> = Partial<
    Omit<SwarmPlotCanvasProps<RawDatum>, 'data' | 'groups' | 'width' | 'height'>
> &
    Pick<SwarmPlotCanvasProps<RawDatum>, 'data' | 'groups'>

export const ResponsiveSwarmPlotCanvas = <RawDatum,>(
    props: ResponsiveSwarmPlotCanvasProps<RawDatum>
) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <SwarmPlotCanvas<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
