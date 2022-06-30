import { PropertyAccessor } from '@nivo/core'
import { InheritedColorConfig } from '@nivo/colors'
import { ArcLabelComponent } from './ArcLabelsLayer.js'
import { DatumWithArcAndColor } from '../types.js'

export interface ArcLabelsProps<Datum extends DatumWithArcAndColor> {
    arcLabel: PropertyAccessor<Datum, string>
    arcLabelsRadiusOffset: number
    arcLabelsSkipAngle: number
    arcLabelsTextColor: InheritedColorConfig<Datum>
    arcLabelsComponent: ArcLabelComponent<Datum>
}
