import styled, { css } from 'styled-components';
import RedLineRow from '../../assets/category-red-line-1.png';
import RedLineColumn from '../../assets/category-red-line-2.png';
import YellowLineRow from '../../assets/category-yellow-line-1.png';
import YellowLineColumn from '../../assets/category-yellow-line-2.png';
import { Link } from 'react-router-dom';

export const CategorySlideContainer = styled.div`
	margin-bottom: 120px;
`;

export const Wrapper = styled.div`
	width: 100%;
	overflow-x: hidden;
`;

export const Heading = styled.h5`
	font-size: 2.5rem;
	font-weight: 500;
	text-align: center;
	margin-bottom: 40px;

	@media screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
`;

export const SliderList = styled.div`
	display: flex;
	transition: transform ease 0.4s;

	${({ slides }) => css`
		transform: translateX(${slides * -33.3}%);

		@media screen and (max-width: 960px) {
			transform: translateX(${slides * -50}%);
		}

		@media screen and (max-width: 500px) {
			transform: translateX(${slides * -100}%);
		}
	`}
`;

export const SliderItem = styled.div`
	max-width: 33.3%;
	min-width: 33.3%;
	padding: 0 20px;

	@media screen and (max-width: 960px) {
		max-width: 50%;
		min-width: 50%;
		padding: 0 20px;
	}

	@media screen and (max-width: 600px) {
		padding: 0 5px;
	}

	@media screen and (max-width: 500px) {
		max-width: 100%;
		min-width: 100%;
		padding: 0 20px;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
	transition: all 1s;
	transform: scale(1.05);
`;

export const WrapImg = styled.div`
	overflow: hidden;
`;

export const WrapLink = styled(Link)`
	display: block;
	position: relative;
	padding: 20px;

	${({ color }) => css`
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 20px;
			background: url(${color === 'red' ? RedLineColumn : YellowLineColumn}) no-repeat center
				left;
		}
		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			width: 20px;
			background: url(${color === 'red' ? RedLineColumn : YellowLineColumn}) no-repeat center
				right;
		}
	`}
	&:hover ${Image} {
		transform: scale(1.1);
	}
`;

export const TopBottomLine = styled.div`
	position: relative;

	${({ color }) => css`
		&::before {
			content: '';
			position: absolute;
			top: -20px;
			left: 0;
			right: 0;
			height: 20px;
			background: url(${color === 'red' ? RedLineRow : YellowLineRow}) repeat center top;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: -20px;
			left: 0;
			right: 0;
			height: 20px;
			background: url(${color === 'red' ? RedLineRow : YellowLineRow}) repeat center bottom;
		}
	`}
`;
