/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { PatternDots } from './PatternDots.js'
import { PatternLines } from './PatternLines.js'
import { PatternSquares } from './PatternSquares.js'

export const patternTypes = {
    patternDots: PatternDots,
    patternLines: PatternLines,
    patternSquares: PatternSquares,
}

export * from './PatternDots.js'
export * from './PatternLines.js'
export * from './PatternSquares.js'
