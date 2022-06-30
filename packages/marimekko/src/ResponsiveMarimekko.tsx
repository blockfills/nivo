import { ResponsiveWrapper } from '@nivo/core'
import { Marimekko } from './Marimekko.js'
import { SvgProps } from './types.js'

export const ResponsiveMarimekko = <RawDatum,>(
    props: Omit<SvgProps<RawDatum>, 'width' | 'height'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <Marimekko<RawDatum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
