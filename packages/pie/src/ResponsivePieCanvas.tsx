import { ResponsiveWrapper } from '@nivo/core'
import { PieCanvas } from './PieCanvas.js'
import { PieCanvasProps } from './types.js'

export const ResponsivePieCanvas = <RawDatum,>(
    props: Omit<PieCanvasProps<RawDatum>, 'width' | 'height'>
) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <PieCanvas<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
