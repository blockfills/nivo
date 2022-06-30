import { ResponsiveWrapper } from '@nivo/core'
import { ChordCanvas } from './ChordCanvas.js'
import { ChordCanvasProps } from './types.js'

export const ResponsiveChordCanvas = (props: Omit<ChordCanvasProps, 'width' | 'height'>) => (
    <ResponsiveWrapper>
        {({ width, height }) => <ChordCanvas {...props} width={width} height={height} />}
    </ResponsiveWrapper>
)
