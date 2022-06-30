import { Separator } from './Separator.js'
import { SeparatorProps as SeparatorType } from './types.js'

interface SeparatorsProps {
    beforeSeparators: SeparatorType[]
    afterSeparators: SeparatorType[]
}

export const Separators = ({ beforeSeparators, afterSeparators }: SeparatorsProps) => (
    <>
        {beforeSeparators.map(separator => (
            <Separator key={separator.partId} separator={separator} />
        ))}
        {afterSeparators.map(separator => (
            <Separator key={separator.partId} separator={separator} />
        ))}
    </>
)
