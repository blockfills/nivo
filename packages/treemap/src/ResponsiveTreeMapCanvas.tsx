import { ResponsiveWrapper } from '@nivo/core'
import { DefaultTreeMapDatum, TreeMapCanvasProps } from './types.js'
import { TreeMapCanvas } from './TreeMapCanvas.js'

export const ResponsiveTreeMapCanvas = <Datum extends object = DefaultTreeMapDatum>(
    props: Omit<TreeMapCanvasProps<Datum>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <TreeMapCanvas<Datum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
