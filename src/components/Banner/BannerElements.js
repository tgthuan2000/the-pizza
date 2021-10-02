import styled from 'styled-components';
import BannerLine from '../../assets/banner-line.png';
import WhiteLine from '../../assets/white-line.png';

const Arrow = styled.span`
	position: absolute;
	z-index: 2;
	cursor: pointer;
	top: 50%;
	transform: translateY(-50%);
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 2px solid #fcb119;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all ease 0.4s;

	&:hover {
		background-color: #fcb119;
	}

	& svg {
		color: #fcb119;
	}
	&:hover svg {
		color: black;
	}

	@media screen and (max-width: 744px) {
		opacity: 1;
		border: none;
		& svg,
		&:hover svg {
			color: white;
		}
		&:hover {
			background-color: transparent;
		}
	}
`;

export const ArrowLeft = styled(Arrow)`
	left: 60px;
	@media screen and (max-width: 744px) {
		left: 10px;
	}
`;

export const ArrowRight = styled(Arrow)`
	right: 60px;
	@media screen and (max-width: 744px) {
		right: 10px;
	}
`;

export const BannerContainer = styled.div`
	max-width: 100vw;
	overflow: hidden;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		background: url(${WhiteLine}) center bottom;
		left: 0;
		right: 0;
		top: 0;
		height: 20px;
	}

	&::after {
		content: '';
		position: absolute;
		z-index: 1;
		background: url(${BannerLine}) center top;
		left: 0;
		right: 0;
		bottom: 0;
		height: 85px;
	}

	@media screen and (min-width: 745px) {
		&:hover ${ArrowLeft} {
			opacity: 1;
			left: 50px;
		}

		&:hover ${ArrowRight} {
			opacity: 1;
			right: 50px;
		}
	}
`;

export const SliderList = styled.div`
	display: flex;
	transition: transform 0.5s ease;
	transform: translateX(${({ slide }) => slide * -100}vw);
`;

export const SliderItem = styled.img`
	object-fit: cover;
	min-width: 100vw;
	max-width: 100vw;
`;
