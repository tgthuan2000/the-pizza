import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
	background-color: white;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: black;
`;

export const BoxIcon = styled.span`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	background-color: #fcb119;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BoxInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-left: 10px;
`;

export const InfoTitle = styled.span`
	font-weight: 300;
	font-size: 1rem;
	margin-bottom: 5px;
`;

export const InfoContent = styled.p`
	font-weight: 400;
	font-size: 1.4rem;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const SearchWrapper = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: -70px;
`;

export const BottomList = styled.ul`
	display: flex;
	justify-content: center;
`;

export const BottomItemLink = styled(Link)`
	padding: 14px;
	margin: 0 10px;
	border-radius: 8px;
	background-color: transparent;
	color: black;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: bold;

	&:hover {
		background-color: #d32512;
		color: white;
	}
`;
