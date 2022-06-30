import { FunctionComponent } from 'react'
import { barMapping } from './bar.js'
import { circlePackingMapping } from './circle_packing.js'
import { calendarMapping } from './calendar.js'
import { chordMapping } from './chord.js'
import { heatmapMapping } from './heatmap.js'
import { lineMapping } from './line.js'
import { pieMapping } from './pie.js'
import { radarMapping } from './radar.js'
import { sankeyMapping } from './sankey.js'
import { sunburstMapping } from './sunburst.js'
import { treemapMapping } from './treemap.js'

export const chartsMapping = {
    bar: barMapping,
    circle_packing: circlePackingMapping,
    calendar: calendarMapping,
    chord: chordMapping,
    heatmap: heatmapMapping,
    line: lineMapping,
    pie: pieMapping,
    radar: radarMapping,
    sankey: sankeyMapping,
    sunburst: sunburstMapping,
    treemap: treemapMapping,
} as const

type ExtractProps<T> = T extends FunctionComponent<infer P> ? P : never

export type ChartType = keyof typeof chartsMapping
export type ChartComponent<T extends ChartType> = typeof chartsMapping[T]['component']
export type ChartProps<T extends ChartType> = ExtractProps<ChartComponent<T>>

export * from './bar.js'
export * from './calendar.js'
export * from './chord.js'
export * from './circle_packing.js'
export * from './heatmap.js'
export * from './line.js'
export * from './pie.js'
export * from './radar.js'
export * from './sankey.js'
export * from './treemap.js'
