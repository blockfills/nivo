/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ResponsiveWrapper } from '@nivo/core'
import WaffleHtml from './WaffleHtml.js'

const ResponsiveWaffleHtml = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <WaffleHtml width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveWaffleHtml
