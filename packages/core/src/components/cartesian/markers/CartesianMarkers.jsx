import { memo } from 'react'
import PropTypes from 'prop-types'
import CartesianMarkersItem from './CartesianMarkersItem.js'

const CartesianMarkers = ({ markers, width, height, xScale, yScale }) => {
    if (!markers || markers.length === 0) return null

    return markers.map((marker, i) => (
        <CartesianMarkersItem
            key={i}
            {...marker}
            width={width}
            height={height}
            scale={marker.axis === 'y' ? yScale : xScale}
        />
    ))
}

CartesianMarkers.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,

    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,

    markers: PropTypes.arrayOf(
        PropTypes.shape({
            axis: PropTypes.oneOf(['x', 'y']).isRequired,
            value: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.instanceOf(Date),
            ]).isRequired,
            lineStyle: PropTypes.object,
            textStyle: PropTypes.object,
        })
    ),
}

export default memo(CartesianMarkers)
