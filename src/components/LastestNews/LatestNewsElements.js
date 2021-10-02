import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
	margin-bottom: 50px;
`;

export const NewsList = styled.ul`
	display: flex;
	transition: all ease 1s;

	${({ slide }) => css`
		transform: translateX(${slide * -33.3}%);

		@media screen and (max-width: 960px) {
			transform: translateX(${slide * -50}%);
		}
		@media screen and (max-width: 600px) {
			transform: translateX(${slide * -100}%);
		}
	`}
`;

export const SearchBtn = styled(Link)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(2);
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all ease 0.3s;
	width: 45px;
	height: 45px;
	color: white;
	border: 2px solid currentColor;
	border-radius: 50%;
	background-color: transparent;

	&:hover {
		color: white;
		border-color: #d32512;
		background-color: #d32512;
	}
	@media screen and (max-width: 600px) {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`;
export const WrapperImgItem = styled.div`
	position: relative;
	padding: 8px;
	border-radius: 15px;
	background-color: white;

	@media screen and (max-width: 744px) {
		padding: 4px;
	}
`;
export const ImageWrapper = styled(Link)`
	display: block;
	position: relative;

	&::before {
		content: '';
		cursor: pointer;
		border-radius: 10px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.3);
		opacity: 0;
		transition: opacity ease 0.3s;
	}

	@media screen and (max-width: 600px) {
		&::before {
			opacity: 1;
		}
	}
`;

export const NewsItem = styled.li`
	max-width: 33.3%;
	min-width: 33.3%;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fcb119;
	font-weight: bold;

	@media screen and (min-width: 600px) {
		&:hover ${SearchBtn} {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
		&:hover ${ImageWrapper}::before {
			opacity: 1;
		}
	}

	@media screen and (max-width: 960px) {
		max-width: 50%;
		min-width: 50%;
	}
	@media screen and (max-width: 600px) {
		max-width: 100%;
		min-width: 100%;
	}
`;

export const Image = styled.img`
	border-radius: 15px;
	display: block;
	width: 100%;
	object-fit: cover;
`;

export const DateContainer = styled.span`
	display: flex;
	align-items: center;
	color: inherit;
	margin: 15px 0;
`;

export const Date = styled.p`
	font-size: 1.3rem;
	margin-left: 10px;
`;

export const Title = styled(Link)`
	font-family: 'Mtrix', sans-serif;
	font-weight: 500;
	font-size: 2.2rem;
	color: white;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 80%;

	&:hover {
		color: inherit;
	}
`;

export const Desc = styled.span`
	font-size: 1rem;
	color: gray;
	margin: 10px 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 90%;
`;

export const ReadMore = styled(Link)`
	color: inherit;
	margin: 5px 0;
	font-size: 1.1rem;
	cursor: pointer;
	display: flex;
	align-items: center;
`;
