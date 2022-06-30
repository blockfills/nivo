import { ResponsiveWrapper } from '@nivo/core'
import { VoronoiSvgProps } from './types.js'
import { Voronoi } from './Voronoi.js'

type ResponsiveVoronoiProps = Partial<Omit<VoronoiSvgProps, 'data' | 'width' | 'height'>> &
    Pick<VoronoiSvgProps, 'data'>

export const ResponsiveVoronoi = (props: ResponsiveVoronoiProps) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <Voronoi width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
