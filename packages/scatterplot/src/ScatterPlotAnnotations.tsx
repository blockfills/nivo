import { Annotation } from '@nivo/annotations'
import { useScatterPlotAnnotations } from './hooks.js'
import { ScatterPlotCommonProps, ScatterPlotDatum, ScatterPlotNodeData } from './types.js'

interface ScatterPlotAnnotationsProps<RawDatum extends ScatterPlotDatum> {
    nodes: ScatterPlotNodeData<RawDatum>[]
    annotations: ScatterPlotCommonProps<RawDatum>['annotations']
}

export const ScatterPlotAnnotations = <RawDatum extends ScatterPlotDatum>({
    nodes,
    annotations,
}: ScatterPlotAnnotationsProps<RawDatum>) => {
    const boundAnnotations = useScatterPlotAnnotations<RawDatum>(nodes, annotations)

    return (
        <>
            {boundAnnotations.map((annotation, i) => (
                <Annotation key={i} {...annotation} />
            ))}
        </>
    )
}
