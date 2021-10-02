import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RedLine from '../../assets/red-line.png';
import { fade } from '../../animation';

export const OfferImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const LinkOfferImg = styled(Link)`
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

export const WrapperOfferImg = styled.div`
	margin-top: -25px;

	&:hover ${LinkOfferImg}::before, &:hover ${LinkOfferImg}::after {
		animation: ${fade} 0.7s ease-in;
	}
`;
export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const InfoWarpper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const InfoTitle = styled.h5`
	font-size: 1.25rem;
	font-weight: 500;
`;

// copy right

export const CopyRightContainer = styled.div`
	color: white;
	background-color: #e20020;
	position: relative;
	padding: 15px 0;

	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		background: url(${RedLine}) center top;
		left: 0;
		right: 0;
		top: -20px;
		height: 20px;
	}
`;

export const WrapperCopyRight = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 744px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;

export const IconList = styled.div`
	display: flex;
`;

export const IconItem = styled(Link)`
	display: block;
	margin: 0 10px;
`;

export const PoweredBy = styled.p`
	font-size: 1.2rem;

	@media screen and (max-width: 744px) {
		margin-bottom: 15px;
	}
`;
