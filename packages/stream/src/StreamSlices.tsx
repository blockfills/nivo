import { StreamSliceData, StreamDatum, StreamCommonProps } from './types.js'
import { StreamSlicesItem } from './StreamSlicesItem.js'

interface StreamSlicesProps<RawDatum extends StreamDatum> {
    slices: StreamSliceData[]
    height: number
    tooltip: StreamCommonProps<RawDatum>['stackTooltip']
}

export const StreamSlices = <RawDatum extends StreamDatum>({
    slices,
    height,
    tooltip,
}: StreamSlicesProps<RawDatum>) => (
    <g>
        {slices.map(slice => (
            <StreamSlicesItem<RawDatum>
                key={slice.index}
                slice={slice}
                height={height}
                tooltip={tooltip}
            />
        ))}
    </g>
)
