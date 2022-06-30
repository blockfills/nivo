import { ResponsiveWrapper } from '@nivo/core'
import { DefaultTreeMapDatum, TreeMapSvgProps } from './types.js'
import { TreeMap } from './TreeMap.js'

export const ResponsiveTreeMap = <Datum extends object = DefaultTreeMapDatum>(
    props: Omit<TreeMapSvgProps<Datum>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <TreeMap<Datum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
