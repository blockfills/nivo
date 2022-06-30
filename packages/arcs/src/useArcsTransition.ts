import { useTransition, PickAnimated, TransitionFn } from '@react-spring/web'
import { useMotionConfig } from '@nivo/core'
import { DatumWithArc } from './types.js'
import { ArcTransitionMode, useArcTransitionMode, TransitionExtra } from './arcTransitionMode.js'
import { interpolateArc } from './interpolateArc.js'

export interface UseArcsTransition<Datum extends DatumWithArc, ExtraProps = unknown> {
    interpolate: typeof interpolateArc
    transition: TransitionFn<
        Datum,
        PickAnimated<
            {
                progress: number
                startAngle: number
                endAngle: number
                innerRadius: number
                outerRadius: number
            } & ExtraProps
        >
    >
}

/**
 * This hook can be used to animate a group of arcs,
 * if you want to animate a single arc,
 * please have a look at the `useAnimatedArc` hook.
 */
export const useArcsTransition = <Datum extends DatumWithArc, ExtraProps = unknown>(
    data: Datum[],
    mode: ArcTransitionMode = 'innerRadius',
    extra?: TransitionExtra<Datum, ExtraProps>
): UseArcsTransition<Datum, ExtraProps> => {
    const { animate, config: springConfig } = useMotionConfig()

    const phases = useArcTransitionMode<Datum, ExtraProps>(mode, extra)

    const transition = useTransition<
        Datum,
        {
            progress: number
            startAngle: number
            endAngle: number
            innerRadius: number
            outerRadius: number
        } & ExtraProps
    >(data, {
        keys: datum => datum.id,
        initial: phases.update,
        from: phases.enter,
        enter: phases.update,
        update: phases.update,
        leave: phases.leave,
        config: springConfig,
        immediate: !animate,
    })

    return {
        transition: transition as never,
        interpolate: interpolateArc,
    }
}
