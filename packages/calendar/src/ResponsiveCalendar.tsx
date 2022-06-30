import { Calendar } from './Calendar.js'
import { CalendarSvgProps } from './types.js'
import { ResponsiveWrapper } from '@nivo/core'

export const ResponsiveCalendar = (props: Omit<CalendarSvgProps, 'height' | 'width'>) => (
    <ResponsiveWrapper>
        {({ width, height }) => <Calendar width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
