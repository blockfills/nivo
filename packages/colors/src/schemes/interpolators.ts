import { divergingColorInterpolators, DivergingColorInterpolatorId } from './diverging.js'
import { sequentialColorInterpolators, SequentialColorInterpolatorId } from './sequential.js'
import { cyclicalColorInterpolators, CyclicalColorInterpolatorId } from './cyclical.js'

export const colorInterpolators = {
    ...divergingColorInterpolators,
    ...sequentialColorInterpolators,
    ...cyclicalColorInterpolators,
}

export type ColorInterpolatorId =
    | DivergingColorInterpolatorId
    | SequentialColorInterpolatorId
    | CyclicalColorInterpolatorId

export const colorInterpolatorIds = Object.keys(colorInterpolators) as ColorInterpolatorId[]
