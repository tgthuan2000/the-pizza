import { Scrollbars as Scrollbar } from 'react-custom-scrollbars-2'
import PropTypes from 'prop-types'
import { CustomThumb, TrackHorizontal, TrackVertical } from './ScrollbarsElements'

const Scrollbars = ({
	children,
	onScroll,
	minHeight,
	maxHeight,
	thumbSize = 100,
	size = 'medium',
	padding,
}) => {
	const thumbStyle = ({ style, ...props }) => <CustomThumb {...props} styled={style} />
	return (
		<Scrollbar
			onScroll={onScroll}
			autoHeight
			autoHeightMin={minHeight}
			autoHeightMax={maxHeight}
			thumbSize={thumbSize}
			autoHide
			autoHideTimeout={5000}
			autoHideDuration={1000}
			universal={true}
			renderTrackVertical={({ style, ...props }) => (
				<TrackVertical {...props} styled={style} size={size} padding={padding} />
			)}
			renderTrackHorizontal={({ style, ...props }) => (
				<TrackHorizontal {...props} styled={style} size={size} padding={padding} />
			)}
			renderThumbVertical={thumbStyle}
			renderThumbHorizontal={thumbStyle}
		>
			{children}
		</Scrollbar>
	)
}

Scrollbars.propTypes = {
	maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	thumbSize: PropTypes.number,
	onScroll: PropTypes.func,
}

export default Scrollbars
