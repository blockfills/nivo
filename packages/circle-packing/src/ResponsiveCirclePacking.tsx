import { ResponsiveWrapper } from '@nivo/core'
import { CirclePackingSvgProps } from './types.js'
import { CirclePacking } from './CirclePacking.js'

type ResponsiveCirclePackingProps<RawDatum> = Partial<
    Omit<CirclePackingSvgProps<RawDatum>, 'data' | 'width' | 'height'>
> &
    Pick<CirclePackingSvgProps<RawDatum>, 'data'>

export const ResponsiveCirclePacking = <RawDatum,>(
    props: ResponsiveCirclePackingProps<RawDatum>
) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <CirclePacking<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
