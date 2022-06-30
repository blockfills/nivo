import { AnchoredContinuousColorsLegendProps } from '../types.js'
import { computePositionFromAnchor } from '../compute.js'
import { continuousColorsLegendDefaults } from '../defaults.js'
import { ContinuousColorsLegendSvg } from './ContinuousColorsLegendSvg.js'

export const AnchoredContinuousColorsLegendSvg = ({
    containerWidth,
    containerHeight,
    anchor,
    translateX = 0,
    translateY = 0,
    length = continuousColorsLegendDefaults.length,
    thickness = continuousColorsLegendDefaults.thickness,
    direction = continuousColorsLegendDefaults.direction,
    ...legendProps
}: AnchoredContinuousColorsLegendProps) => {
    let width: number
    let height: number
    if (direction === 'row') {
        width = length
        height = thickness
    } else {
        width = thickness
        height = length
    }

    const { x, y } = computePositionFromAnchor({
        anchor,
        translateX,
        translateY,
        containerWidth,
        containerHeight,
        width,
        height,
    })

    return (
        <g transform={`translate(${x}, ${y})`}>
            <ContinuousColorsLegendSvg
                length={length}
                thickness={thickness}
                direction={direction}
                {...legendProps}
            />
        </g>
    )
}
