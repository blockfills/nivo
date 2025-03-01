/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { forwardRef } from 'react'
import { ResponsiveWrapper } from '@nivo/core'
import LineCanvas from './LineCanvas.js'

const ResponsiveLineCanvas = (props, ref) => (
    <ResponsiveWrapper>
        {({ width, height }) => <LineCanvas width={width} height={height} {...props} ref={ref} />}
    </ResponsiveWrapper>
)

export default forwardRef(ResponsiveLineCanvas)
