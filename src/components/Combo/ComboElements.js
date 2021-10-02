import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import RedLineRow from '../../assets/category-red-line-1.png';
import RedLineColumn from '../../assets/category-red-line-2.png';
import YellowLineRow from '../../assets/category-yellow-line-1.png';
import YellowLineColumn from '../../assets/category-yellow-line-2.png';
import { fade } from '../../animation';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 744px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const WrapLink = styled(Link)`
	display: block;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		background-color: rgba(255, 255, 255, 0.2);
	}

	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.2);
	}
`;

export const Box = styled.div`
	padding: 20px;
	margin: 25px 0;
	position: relative;

	${({ color }) => css`
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 9px;
			right: 9px;
			height: 20px;
			background: url(${color === 'red' ? RedLineRow : YellowLineRow}) center top;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 4px;
			left: 9px;
			right: 9px;
			height: 20px;
			background: url(${color === 'red' ? RedLineRow : YellowLineRow}) center bottom;
		}
	`}

	&:hover ${WrapLink}::before, &:hover ${WrapLink}::after {
		animation: ${fade} 1s;
	}
`;

export const Item = styled.div`
	width: 100%;
	position: relative;
	${({ color }) => css`
		&::before {
			content: '';
			position: absolute;
			left: -18px;
			top: 0;
			bottom: 0;
			width: 20px;
			background: url(${color === 'red' ? RedLineColumn : YellowLineColumn}) center left;
		}

		&::after {
			content: '';
			position: absolute;
			right: -18px;
			top: 0;
			bottom: 0;
			width: 20px;
			background: url(${color === 'red' ? RedLineColumn : YellowLineColumn}) center right;
		}
	`}
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
