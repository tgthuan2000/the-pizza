import { NavIcon } from '../../Icon';
import SearchInput from '../SearchInput';
import Position from '../../Position';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { CloseOutlined, SearchOutlined } from '@mui/icons-material';

const SearchSmall = forwardRef(({ isShow, onClick, onSubmit }, ref) => {
	return (
		<NavIcon icon={isShow ? CloseOutlined : SearchOutlined} onClick={onClick}>
			{isShow && (
				<Position
					method='absolute'
					top='calc(100% + 10px)'
					right='calc(12vw - 120px)'
					zIndex={3}>
					<SearchInput
						placeholder='Search'
						button={SearchOutlined}
						ref={ref}
						onSubmit={onSubmit}
					/>
				</Position>
			)}
		</NavIcon>
	);
});

SearchSmall.propTypes = {
	isShow: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	onSubmit: PropTypes.func,
};

export default SearchSmall;
