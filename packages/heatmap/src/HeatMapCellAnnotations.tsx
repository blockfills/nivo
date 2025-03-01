import { Annotation } from '@nivo/annotations'
import { ComputedCell, HeatMapCommonProps, HeatMapDatum } from './types.js'
import { useCellAnnotations } from './hooks.js'

interface HeatMapCellAnnotationsProps<Datum extends HeatMapDatum> {
    cells: ComputedCell<Datum>[]
    annotations: NonNullable<HeatMapCommonProps<Datum>['annotations']>
}

export const HeatMapCellAnnotations = <Datum extends HeatMapDatum>({
    cells,
    annotations,
}: HeatMapCellAnnotationsProps<Datum>) => {
    const boundAnnotations = useCellAnnotations<Datum>(cells, annotations)

    return (
        <>
            {boundAnnotations.map((annotation, i) => (
                <Annotation key={i} {...annotation} />
            ))}
        </>
    )
}
