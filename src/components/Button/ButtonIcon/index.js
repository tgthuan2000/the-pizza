import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonIcon = ({ children, ...props }) => (
	<ButtonIconWrapper {...props}>{children}</ButtonIconWrapper>
);

ButtonIcon.propTypes = {
	active: PropTypes.bool,
};

export const ButtonIconWrapper = styled.button`
	border: none;
	cursor: pointer;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	${({ active }) => css`
		background-color: ${active ? '#d32512' : '#fcb119'};
		color: ${active ? 'white' : '#444'};
	`}

	&:hover {
		background-color: #d32512;
		color: white;
	}
`;

export default ButtonIcon;
