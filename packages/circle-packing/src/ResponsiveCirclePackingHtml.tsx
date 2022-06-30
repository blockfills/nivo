import { ResponsiveWrapper } from '@nivo/core'
import { CirclePackingHtmlProps } from './types.js'
import { CirclePackingHtml } from './CirclePackingHtml.js'

type ResponsiveCirclePackingHtmlProps<RawDatum> = Partial<
    Omit<CirclePackingHtmlProps<RawDatum>, 'data' | 'width' | 'height'>
> &
    Pick<CirclePackingHtmlProps<RawDatum>, 'data'>

export const ResponsiveCirclePackingHtml = <RawDatum,>(
    props: ResponsiveCirclePackingHtmlProps<RawDatum>
) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <CirclePackingHtml<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
