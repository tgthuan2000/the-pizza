import styled from 'styled-components';
import RedLine from '../../assets/red-line.png';

export const InfoNavContainer = styled.div`
	color: white;
	background-color: #e20020;
	position: relative;
	padding: 15px 0;

	&::after {
		content: '';
		position: absolute;
		z-index: 1;
		background: url(${RedLine}) center bottom;
		left: 0;
		right: 0;
		bottom: -20px;
		height: 20px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 960px) {
		justify-content: center;
	}
`;

export const Left = styled.div`
	color: inherit;
	display: flex;
	align-items: center;

	& > p {
		margin-left: 10px;
		font-size: 1rem;
	}
`;

export const RightList = styled.ul`
	color: inherit;
	display: flex;
`;

export const RightItem = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const ItemName = styled.span`
	margin-left: 5px;
	font-weight: 500;
`;
