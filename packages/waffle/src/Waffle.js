/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { createElement, Component, Fragment } from 'react'
import partial from 'lodash/partial.js'
import { TransitionMotion, spring } from 'react-motion'
import { setDisplayName } from '@nivo/recompose'
import { LegacyContainer, SvgWrapper } from '@nivo/core'
import { BoxLegendSvg } from '@nivo/legends'
import { WafflePropTypes } from './props.js'
import enhance from './enhance.js'
import { applyDataToGrid } from './compute.js'
import WaffleCellTooltip from './WaffleCellTooltip.js'

export class Waffle extends Component {
    static propTypes = WafflePropTypes

    handleCellHover = (showTooltip, cell, event) => {
        const { setCurrentCell, theme, tooltipFormat, tooltip } = this.props

        setCurrentCell(cell)

        if (!cell.data) return

        showTooltip(
            <WaffleCellTooltip
                position={cell.position}
                row={cell.row}
                column={cell.column}
                color={cell.color}
                data={cell.data}
                theme={theme}
                tooltipFormat={tooltipFormat}
                tooltip={tooltip}
            />,
            event
        )
    }

    handleCellLeave = hideTooltip => {
        this.props.setCurrentCell(null)
        hideTooltip()
    }

    render() {
        const {
            hiddenIds,

            // dimensions
            margin,
            width,
            height,
            outerWidth,
            outerHeight,

            // styling
            cellComponent,
            emptyColor,
            emptyOpacity,
            borderWidth,
            getBorderColor,
            theme,
            defs,

            // motion
            animate,
            motionStiffness,
            motionDamping,

            // interactivity
            isInteractive,
            onClick,

            // computed
            cells,
            cellSize,
            origin,
            computedData,
            legendData,

            legends,
            role,
        } = this.props

        cells.forEach(cell => {
            cell.color = emptyColor
        })

        return (
            <LegacyContainer
                isInteractive={isInteractive}
                theme={theme}
                animate={animate}
                motionDamping={motionDamping}
                motionStiffness={motionStiffness}
            >
                {({ showTooltip, hideTooltip }) => {
                    const onHover = partial(this.handleCellHover, showTooltip)
                    const onLeave = partial(this.handleCellLeave, hideTooltip)

                    let cellsRender
                    if (animate === true) {
                        const springConfig = {
                            stiffness: motionStiffness,
                            damping: motionDamping,
                        }

                        cellsRender = (
                            <TransitionMotion
                                styles={computedData.map(datum => ({
                                    key: datum.id,
                                    data: datum,
                                    style: {
                                        startAt: spring(datum.startAt, springConfig),
                                        endAt: spring(datum.endAt, springConfig),
                                    },
                                }))}
                            >
                                {interpolatedStyles => {
                                    const computedCells = applyDataToGrid(
                                        cells,
                                        interpolatedStyles.map(s => ({
                                            ...s.data,
                                            startAt: Math.round(s.style.startAt),
                                            endAt: Math.round(s.style.endAt),
                                        })),
                                        hiddenIds
                                    )

                                    return (
                                        <Fragment>
                                            {computedCells.map(cell =>
                                                createElement(cellComponent, {
                                                    key: cell.position,
                                                    position: cell.position,
                                                    size: cellSize,
                                                    x: cell.x,
                                                    y: cell.y,
                                                    color: cell.color,
                                                    fill: cell.data && cell.data.fill,
                                                    opacity: cell.data ? 1 : emptyOpacity,
                                                    borderWidth,
                                                    borderColor: getBorderColor(cell),
                                                    data: cell.data,
                                                    onHover: partial(onHover, cell),
                                                    onLeave,
                                                    onClick,
                                                })
                                            )}
                                        </Fragment>
                                    )
                                }}
                            </TransitionMotion>
                        )
                    } else {
                        const computedCells = applyDataToGrid(cells, computedData, hiddenIds)

                        cellsRender = (
                            <Fragment>
                                {computedCells.map(cell =>
                                    createElement(cellComponent, {
                                        key: cell.position,
                                        position: cell.position,
                                        size: cellSize,
                                        x: cell.x,
                                        y: cell.y,
                                        color: cell.color,
                                        fill: cell.data && cell.data.fill,
                                        opacity: cell.data ? 1 : emptyOpacity,
                                        borderWidth,
                                        borderColor: getBorderColor(cell),
                                        data: cell.data,
                                        onHover: partial(onHover, cell),
                                        onLeave,
                                        onClick,
                                    })
                                )}
                            </Fragment>
                        )
                    }

                    return (
                        <SvgWrapper
                            width={outerWidth}
                            height={outerHeight}
                            margin={margin}
                            defs={defs}
                            theme={theme}
                            role={role}
                        >
                            <g transform={`translate(${origin.x}, ${origin.y})`}>{cellsRender}</g>
                            {legends.map((legend, i) => (
                                <BoxLegendSvg
                                    key={i}
                                    {...legend}
                                    containerWidth={width}
                                    containerHeight={height}
                                    data={legendData}
                                    theme={theme}
                                />
                            ))}
                        </SvgWrapper>
                    )
                }}
            </LegacyContainer>
        )
    }
}

Waffle.displayName = 'Waffle'

export default setDisplayName(Waffle.displayName)(enhance(Waffle))
