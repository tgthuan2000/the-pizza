import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TrendingButton = ({ children, ...props }) => (
	<TrendingButtonWrapper {...props}>{children}</TrendingButtonWrapper>
);

TrendingButton.propTypes = {
	active: PropTypes.bool,
	size: PropTypes.string,
};

const TrendingButtonWrapper = styled.span`
	display: block;
	text-align: center;
	cursor: pointer;
	padding: 12px 24px;
	border-radius: 20px;

	${({ active, size }) => css`
		background-color: ${active ? '#d32512' : 'white'};
		color: ${active ? 'white' : 'black'};
		font-size: ${size === 'large' ? 1.5 : 1.2}rem;

		@media screen and (max-width: 600px) {
			padding: 10px 15px;
			font-size: ${size === 'large' ? 1.2 : 1}rem;
		}
	`}

	&:hover {
		background-color: #d32512;
		color: white;
	}
`;

export default TrendingButton;
