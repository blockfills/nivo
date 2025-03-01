import { createElement, useMemo } from 'react'
import { PropertyAccessor, usePropertyAccessor, radiansToDegrees, useTheme } from '@nivo/core'
import { useInheritedColor } from '@nivo/colors'
import { useArcCentersTransition } from '../centers.js'
import { ArcTransitionMode } from '../arcTransitionMode.js'
import { DatumWithArcAndColor } from '../types.js'
import { ArcLabelsProps } from './props.js'
import { ArcLabel, ArcLabelProps } from './ArcLabel.js'

export type ArcLabelComponent<Datum extends DatumWithArcAndColor> = (
    props: ArcLabelProps<Datum>
) => JSX.Element

interface ArcLabelsLayerProps<Datum extends DatumWithArcAndColor> {
    center: [number, number]
    data: Datum[]
    label: PropertyAccessor<Datum, string>
    radiusOffset: ArcLabelsProps<Datum>['arcLabelsRadiusOffset']
    skipAngle: ArcLabelsProps<Datum>['arcLabelsSkipAngle']
    textColor: ArcLabelsProps<Datum>['arcLabelsTextColor']
    transitionMode: ArcTransitionMode
    component?: ArcLabelsProps<Datum>['arcLabelsComponent']
}

export const ArcLabelsLayer = <Datum extends DatumWithArcAndColor>({
    center,
    data,
    transitionMode,
    label: labelAccessor,
    radiusOffset,
    skipAngle,
    textColor,
    component = ArcLabel,
}: ArcLabelsLayerProps<Datum>) => {
    const getLabel = usePropertyAccessor<Datum, string>(labelAccessor)
    const theme = useTheme()
    const getTextColor = useInheritedColor<Datum>(textColor, theme)

    const filteredData = useMemo(
        () =>
            data.filter(datum => {
                return (
                    Math.abs(radiansToDegrees(datum.arc.endAngle - datum.arc.startAngle)) >=
                    skipAngle
                )
            }),
        [data, skipAngle]
    )

    const { transition, interpolate } = useArcCentersTransition<Datum>(
        filteredData,
        radiusOffset,
        transitionMode
    )

    const Label: ArcLabelComponent<Datum> = component

    return (
        <g transform={`translate(${center[0]},${center[1]})`}>
            {transition((transitionProps, datum) => {
                return createElement(Label, {
                    key: datum.id,
                    datum,
                    label: getLabel(datum),
                    style: {
                        ...transitionProps,
                        transform: interpolate(
                            transitionProps.startAngle,
                            transitionProps.endAngle,
                            transitionProps.innerRadius,
                            transitionProps.outerRadius
                        ),
                        textColor: getTextColor(datum),
                    },
                })
            })}
        </g>
    )
}
