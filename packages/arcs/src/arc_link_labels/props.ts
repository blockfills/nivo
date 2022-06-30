import { PropertyAccessor } from '@nivo/core'
import { InheritedColorConfig } from '@nivo/colors'
import { ArcLinkLabelComponent } from './ArcLinkLabelsLayer.js'
import { DatumWithArcAndColor } from '../types.js'

export interface ArcLinkLabelsProps<Datum extends DatumWithArcAndColor> {
    arcLinkLabel: PropertyAccessor<Datum, string>
    arcLinkLabelsSkipAngle: number
    arcLinkLabelsTextOffset: number
    arcLinkLabelsTextColor: InheritedColorConfig<Datum>
    arcLinkLabelsOffset: number
    arcLinkLabelsDiagonalLength: number
    arcLinkLabelsStraightLength: number
    arcLinkLabelsThickness: number
    arcLinkLabelsColor: InheritedColorConfig<Datum>
    component: ArcLinkLabelComponent<Datum>
}
