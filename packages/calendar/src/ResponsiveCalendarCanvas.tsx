import { ResponsiveWrapper } from '@nivo/core'
import { CalendarCanvas } from './CalendarCanvas.js'
import { CalendarCanvasProps } from './types.js'

export const ResponsiveCalendarCanvas = (props: Omit<CalendarCanvasProps, 'width' | 'height'>) => (
    <ResponsiveWrapper>
        {({ width, height }) => <CalendarCanvas width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
