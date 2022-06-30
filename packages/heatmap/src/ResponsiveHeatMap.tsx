import { ResponsiveWrapper } from '@nivo/core'
import { DefaultHeatMapDatum, HeatMapDatum, HeatMapSvgProps } from './types.js'
import { HeatMap } from './HeatMap.js'

export const ResponsiveHeatMap = <
    Datum extends HeatMapDatum = DefaultHeatMapDatum,
    ExtraProps extends object = Record<string, never>
>(
    props: Omit<HeatMapSvgProps<Datum, ExtraProps>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => (
            <HeatMap<Datum, ExtraProps> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
