import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { walking } from '../../animation';

export const ItemSectionWrapper = styled.div`
	background-color: ${({ isGray }) => (isGray ? 'whitesmoke' : 'white')};
	padding: 50px 0;
	margin: 30px 0;
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

	@media screen and (max-width: 960px) {
		flex-direction: column;
	}
`;

export const BadgeImg = styled.img`
	position: absolute;
	top: -30px;
	right: 0;
	z-index: 1;
	@media screen and (max-width: 600px) {
		width: 100px;
	}
`;

export const ProductImg = styled.img`
	width: 100%;
	object-fit: cover;
	transition: transform ease 1s;
`;

export const ImageContainer = styled(Link)`
	flex: 1;
	position: relative;

	&:hover > ${BadgeImg} {
		animation: ${walking} 1.5s ease infinite alternate;
	}

	@media screen and (min-width: 600px) {
		&:hover > ${ProductImg} {
			transform: scale(1.1);
		}
	}
`;

export const ContentContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const LogoWrapper = styled.div`
	margin-bottom: 20px;
`;

export const Title = styled.h5`
	font-size: 3rem;
	font-weight: 500;
	margin-bottom: 15px;

	@media screen and (max-width: 960px) {
		font-size: 2rem;
		margin-bottom: 10px;
	}
`;

export const Content = styled.p`
	width: 70%;
	font-size: 1.5rem;
	margin-bottom: 30px;
	font-style: italic;
	color: #666;
	@media screen and (max-width: 600px) {
		font-size: 1rem;
	}
`;
