import { SvgIcon } from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Position from '../../Position';

const NavIcon = ({ icon, size = 'large', onClick, children }) => (
	<Position method='relative'>
		<NavIconWrapper onClick={onClick}>
			<SvgIcon fontSize={size} component={icon} />
		</NavIconWrapper>
		{children}
	</Position>
);

NavIcon.propTypes = {
	icon: PropTypes.object.isRequired,
	size: PropTypes.oneOf(['large', 'medium', 'small']),
	onClick: PropTypes.func,
};

const NavIconWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #111;
	width: 40px;
	height: 40px;
`;

export default NavIcon;
