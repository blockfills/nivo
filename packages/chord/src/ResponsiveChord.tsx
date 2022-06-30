import { ResponsiveWrapper } from '@nivo/core'
import { Chord } from './Chord.js'
import { ChordSvgProps } from './types.js'

export const ResponsiveChord = (props: Omit<ChordSvgProps, 'width' | 'height'>) => (
    <ResponsiveWrapper>
        {({ width, height }) => <Chord {...props} width={width} height={height} />}
    </ResponsiveWrapper>
)
