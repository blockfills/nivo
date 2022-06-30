import { ResponsiveWrapper } from '@nivo/core'
import { TimeRange } from './TimeRange.js'
import { TimeRangeSvgProps } from './types.js'

export const ResponsiveTimeRange = (props: Omit<TimeRangeSvgProps, 'height' | 'width'>) => (
    <ResponsiveWrapper>
        {({ width, height }) => <TimeRange width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
