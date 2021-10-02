import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonPagination = ({ handleLeftClick, handleRightClick }) => {
	return (
		<PaginationContainer>
			<ButtonPaginate left onClick={handleLeftClick}>
				<ArrowBackOutlined />
			</ButtonPaginate>
			<ButtonPaginate right onClick={handleRightClick}>
				<ArrowForwardOutlined />
			</ButtonPaginate>
		</PaginationContainer>
	);
};

ButtonPagination.propTypes = {
	handleLeftClick: PropTypes.func,
	handleRightClick: PropTypes.func,
};

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0;
`;

export const ButtonPaginate = styled.span`
	${({ left, right }) => css`
		cursor: pointer;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		background: white;
		color: #222;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		margin-left: 10px;

		&:hover {
			background: #d32512;
			color: white;
		}

		&::before {
			content: '';
			position: absolute;
			transform: translateY(-100%);
			top: 40%;
			left: ${left && '-60px'};
			right: ${right && '-60px'};
			width: 60px;
			height: 1px;
			background: white;
		}

		&::after {
			content: '';
			position: absolute;
			transform: translateY(-100%);
			top: 60%;
			left: ${left && '-40px'};
			right: ${right && '-40px'};
			width: 40px;
			height: 1px;
			background: white;
		}
	`}
`;

export default ButtonPagination;
