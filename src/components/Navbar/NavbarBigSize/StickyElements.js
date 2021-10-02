import styled from 'styled-components';
import WhiteLine from '../../../assets/white-line.png';
import { slideShow } from '../../../animation';

export const NavContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	background-color: white;
	padding: 20px 0;
	animation: ${slideShow} 1s ease forwards;

	&::after {
		content: '';
		position: absolute;
		z-index: 1;
		background: url(${WhiteLine}) center bottom;
		left: 0;
		right: 0;
		bottom: -20px;
		height: 20px;
	}
`;

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
