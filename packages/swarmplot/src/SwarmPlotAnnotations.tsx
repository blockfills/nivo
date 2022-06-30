import { Annotation } from '@nivo/annotations'
import { ComputedDatum, SwarmPlotSvgProps } from './types.js'
import { useSwarmPlotAnnotations } from './hooks.js'

export const SwarmPlotAnnotations = <RawDatum,>({
    nodes,
    annotations,
}: {
    nodes: ComputedDatum<RawDatum>[]
    annotations: SwarmPlotSvgProps<RawDatum>['annotations']
}) => {
    const boundAnnotations = useSwarmPlotAnnotations<RawDatum>(nodes, annotations)

    return (
        <>
            {boundAnnotations.map((annotation, i) => (
                <Annotation key={i} {...annotation} />
            ))}
        </>
    )
}
