import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingButtonGroup = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	& > span {
		margin: 0 15px 30px;
	}

	@media screen and (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
		width: 50%;
		margin: auto;
	}
`;
export const WrapperTrendding = styled.div`
	width: 100%;
	overflow: hidden;
`;
export const ProductList = styled.div`
	display: flex;
	transition: all 1s ease;
	transform: translateX(${({ slide }) => slide * -100}%);
`;
export const ProductWrapper = styled.div`
	min-width: 25%;
	max-width: 25%;
	padding: 0 10px;
	margin-bottom: 30px;

	@media screen and (max-width: 960px) {
		min-width: 33.3%;
		max-width: 33.3%;
	}

	@media screen and (max-width: 744px) {
		min-width: 50%;
		max-width: 50%;
	}

	@media screen and (max-width: 550px) {
		min-width: 100%;
		max-width: 100%;
		padding: 0 30px;
	}
`;
export const ProductItem = styled.div`
	border-radius: 15px;
	background: white;
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: -10px;
	left: 0;
	right: 0;
	opacity: 0;
	transition: all ease 0.4s;
	z-index: 1;

	& > button {
		margin: 0 3px;
	}

	@media screen and (max-width: 744px) {
		opacity: 1;
		bottom: 10px;
	}
`;
export const ImageContainer = styled.div`
	display: block;
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		left: 20px;
		right: 20px;
		bottom: 0;
		height: 1px;
		background: #e5e5e5;
	}

	&:hover ${ButtonGroup} {
		opacity: 1;
		bottom: 10px;
	}
`;

export const WrappImgLink = styled(Link)`
	display: block;
`;

export const ProductImg = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 15px;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
`;

export const ProductName = styled(Link)`
	font-size: 1.4rem;
	margin-bottom: 10px;
	font-weight: 400;
`;

export const ProductPrice = styled.span`
	font-size: 1.2rem;
	color: red;
	font-weight: 600;
`;
