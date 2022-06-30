import { AnyScale } from '@nivo/scales'
import { RadialGrid } from './RadialGrid.js'
import { CircularGrid } from './CircularGrid.js'

interface PolarGridProps {
    center: [number, number]
    enableRadialGrid: boolean
    enableCircularGrid: boolean
    angleScale: AnyScale
    radiusScale: AnyScale
    startAngle: number
    endAngle: number
}

export const PolarGrid = ({
    center,
    enableRadialGrid,
    enableCircularGrid,
    angleScale,
    radiusScale,
    startAngle,
    endAngle,
}: PolarGridProps) => {
    const innerRadius = Math.min(...radiusScale.range())
    const outerRadius = Math.max(...radiusScale.range())

    return (
        <g transform={`translate(${center[0]},${center[1]})`}>
            {enableRadialGrid && (
                <RadialGrid
                    scale={angleScale}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                />
            )}
            {enableCircularGrid && (
                <CircularGrid scale={radiusScale} startAngle={startAngle} endAngle={endAngle} />
            )}
        </g>
    )
}
