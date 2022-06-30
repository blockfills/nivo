import { ResponsiveWrapper } from '@nivo/core'
import { DefaultTreeMapDatum, TreeMapHtmlProps } from './types.js'
import { TreeMapHtml } from './TreeMapHtml.js'

export const ResponsiveTreeMapHtml = <Datum extends object = DefaultTreeMapDatum>(
    props: Omit<TreeMapHtmlProps<Datum>, 'height' | 'width'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <TreeMapHtml<Datum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
