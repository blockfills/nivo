/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { compose, defaultProps, setPropTypes } from '@nivo/recompose'
import { motionPropTypes } from '../motion/index.js'
import { defaultAnimate, defaultMotionDamping, defaultMotionStiffness } from '../defaults/index.js'

export default () =>
    compose(
        setPropTypes(motionPropTypes),
        defaultProps({
            animate: defaultAnimate,
            motionDamping: defaultMotionDamping,
            motionStiffness: defaultMotionStiffness,
        })
    )
