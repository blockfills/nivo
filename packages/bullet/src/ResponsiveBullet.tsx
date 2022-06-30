import { ResponsiveWrapper, Dimensions } from '@nivo/core'
import { BulletSvgProps } from './types.js'
import { Bullet } from './Bullet.js'

export const ResponsiveBullet = (props: Omit<BulletSvgProps, 'height' | 'width'>) => (
    <ResponsiveWrapper>
        {({ width, height }: Dimensions) => <Bullet width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
