import { ResponsiveWrapper } from '@nivo/core'
import { Sunburst } from './Sunburst.js'
import { SunburstSvgProps } from './types.js'

type ResponsiveSunburstProps<RawDatum> = Partial<
    Omit<SunburstSvgProps<RawDatum>, 'data' | 'width' | 'height'>
> &
    Pick<SunburstSvgProps<RawDatum>, 'data'>

export const ResponsiveSunburst = <RawDatum,>(props: ResponsiveSunburstProps<RawDatum>) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <Sunburst<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
