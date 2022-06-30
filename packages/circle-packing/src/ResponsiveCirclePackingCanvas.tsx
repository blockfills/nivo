import { ResponsiveWrapper } from '@nivo/core'
import { CirclePackingCanvasProps } from './types.js'
import { CirclePackingCanvas } from './CirclePackingCanvas.js'

type ResponsiveCirclePackingCanvasProps<RawDatum> = Partial<
    Omit<CirclePackingCanvasProps<RawDatum>, 'data' | 'width' | 'height'>
> &
    Pick<CirclePackingCanvasProps<RawDatum>, 'data'>

export const ResponsiveCirclePackingCanvas = <RawDatum,>(
    props: ResponsiveCirclePackingCanvasProps<RawDatum>
) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <CirclePackingCanvas<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
