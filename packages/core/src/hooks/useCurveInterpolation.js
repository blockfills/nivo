import { useMemo } from 'react'
import { curveFromProp } from '../props.js'

/**
 * Transform d3 curve interpolation identifier
 * to its corresponding interpolator.
 */
export const useCurveInterpolation = interpolation =>
    useMemo(() => curveFromProp(interpolation), [interpolation])
