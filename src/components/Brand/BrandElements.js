import styled, { css } from 'styled-components';

export const BrandContainer = styled.div``;

const Arrow = styled.span`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	opacity: 0;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid currentColor;
	color: rgba(0, 0, 0, 0.7);
	background-color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #fcb119;
		border-color: #fcb119;
	}

	@media screen and (max-width: 744px) {
		opacity: 1;
	}
`;

export const ArrowLeft = styled(Arrow)`
	left: 20px;
	@media screen and (max-width: 550px) {
		left: 0;
	}
`;

export const ArrowRight = styled(Arrow)`
	right: 20px;
	@media screen and (max-width: 550px) {
		right: 0;
	}
`;

export const Wrapper = styled.div`
	max-width: 100%;
	overflow: hidden;
	position: relative;

	&:hover ${ArrowLeft}, &:hover ${ArrowRight} {
		opacity: 1;
	}
`;

export const BrandItem = styled.li`
	min-width: 20%;
	max-width: 20%;

	@media screen and (max-width: 960px) {
		min-width: 25%;
		max-width: 25%;
	}
	@media screen and (max-width: 744px) {
		min-width: 33.3%;
		max-width: 33.3%;
	}
	@media screen and (max-width: 550px) {
		min-width: 50%;
		max-width: 50%;
	}
`;

export const BrandList = styled.ul`
	display: flex;
	transition: all ease 0.2s;

	${({ slide }) => css`
		transform: translateX(${slide * -20}%);
		@media screen and (max-width: 960px) {
			transform: translateX(${slide * -25}%);
		}
		@media screen and (max-width: 744px) {
			transform: translateX(${slide * -33.3}%);
		}
		@media screen and (max-width: 550px) {
			transform: translateX(${slide * -50}%);
		}
	`}
`;

export const BrandImg = styled.img`
	margin: auto;
	display: block;
	opacity: 0.5;
	&:hover {
		opacity: 1;
	}
`;
