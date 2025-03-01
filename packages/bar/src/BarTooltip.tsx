import { BarTooltipProps } from './types.js'
import { BasicTooltip } from '@nivo/tooltip'

export const BarTooltip = <RawDatum,>({ color, label, ...data }: BarTooltipProps<RawDatum>) => {
    return <BasicTooltip id={label} value={data.formattedValue} enableChip={true} color={color} />
}
