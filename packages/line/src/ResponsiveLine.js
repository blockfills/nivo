/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ResponsiveWrapper } from '@nivo/core'
import Line from './Line.js'

const ResponsiveLine = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <Line width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveLine
