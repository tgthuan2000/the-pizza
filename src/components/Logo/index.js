import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { logo } from '../../helpers/images';

const Logo = ({ center }) => (
	<WrapLinkLogo to='/' center={center && 'true'}>
		<img src={logo} alt='logo' />
	</WrapLinkLogo>
);

Logo.propTypes = {
	center: PropTypes.bool,
};

const WrapLinkLogo = styled(Link)`
	display: block;
	cursor: pointer;
	position: relative;
	z-index: 9;

	${({ center }) => css`
		width: ${center ? 'fit-content' : 'auto'};
		margin: ${center ? 'auto' : 0};
	`}
`;

export default Logo;
