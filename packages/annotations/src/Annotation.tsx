import { useComputedAnnotation } from './hooks.js'
import { AnnotationNote } from './AnnotationNote.js'
import { AnnotationLink } from './AnnotationLink.js'
import { CircleAnnotationOutline } from './CircleAnnotationOutline.js'
import { DotAnnotationOutline } from './DotAnnotationOutline.js'
import { RectAnnotationOutline } from './RectAnnotationOutline.js'
import { BoundAnnotation } from './types.js'
import { isCircleAnnotation, isDotAnnotation, isRectAnnotation, isSvgNote } from './utils.js'

export const Annotation = <Datum,>(annotation: BoundAnnotation<Datum>) => {
    const { datum, x, y, note } = annotation
    const computed = useComputedAnnotation(annotation)

    if (!isSvgNote(note)) {
        throw new Error('note should be a valid react element')
    }

    return (
        <>
            <AnnotationLink points={computed.points} isOutline={true} />
            {isCircleAnnotation(annotation) && (
                <CircleAnnotationOutline x={x} y={y} size={annotation.size} />
            )}
            {isDotAnnotation(annotation) && (
                <DotAnnotationOutline x={x} y={y} size={annotation.size} />
            )}
            {isRectAnnotation(annotation) && (
                <RectAnnotationOutline
                    x={x}
                    y={y}
                    width={annotation.width}
                    height={annotation.height}
                    borderRadius={annotation.borderRadius}
                />
            )}
            <AnnotationLink points={computed.points} />
            <AnnotationNote datum={datum} x={computed.text[0]} y={computed.text[1]} note={note} />
        </>
    )
}
