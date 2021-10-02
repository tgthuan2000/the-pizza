import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonLink = ({ children, to = '/', size = 'medium', color = 'primary' }) => (
	<ButtonLinkWrapper to={to} size={size} color={color}>
		{children}
	</ButtonLinkWrapper>
);

ButtonLink.propTypes = {
	size: PropTypes.oneOf(['large', 'medium', 'small']),
	color: PropTypes.oneOf(['primary', 'secondary']),
	to: PropTypes.string,
};

export const ButtonLinkWrapper = styled(Link)`
	display: block;
	padding: 10px 30px;
	border-radius: 8px;
	white-space: nowrap;
	& + & {
		margin-left: 10px;
	}

	${({ size, color }) => css`
		${color === 'primary' &&
		css`
			background-color: #fcb119;
			color: black;
			&:hover {
				background-color: #d32512;
				color: white;
			}
		`}
		${color === 'secondary' &&
		css`
			background-color: #d32512;
			color: white;
			&:hover {
				background-color: #fcb119;
				color: black;
			}
		`}
		
		${size === 'large' &&
		css`
			font-size: 1.5rem;
			@media screen and (max-width: 600px) {
				font-size: 1.2rem;
			}
		`}
		${size === 'medium' &&
		css`
			font-size: 1.2rem;
			@media screen and (max-width: 600px) {
				font-size: 1rem;
			}
		`}
		${size === 'small' &&
		css`
			font-size: 1rem;
			@media screen and (max-width: 600px) {
				font-size: 0.8rem;
			}
		`}

		@media screen and (max-width: 600px) {
			padding: 10px 20px;
		}
	`}
`;

export default ButtonLink;
