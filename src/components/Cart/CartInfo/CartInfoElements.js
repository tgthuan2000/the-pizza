import styled from 'styled-components';

export const CartItem = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: nowrap;
	padding: 10px 0;
	margin: 0 20px;

	&:not(:last-child) {
		border-bottom: 1px solid #e5e5e5;
	}
`;

export const ImageWrapper = styled.span`
	border-radius: 15px;
	background-color: #e5e5e5;
	padding: 1px;
	width: 72px;
	display: flex;
`;

export const ItemImage = styled.img`
	align-self: center;
	border-radius: 15px;
	width: 100%;
	object-fit: contain;
`;

export const ItemInfoWrapper = styled.div`
	flex: 1;
	margin: 0 10px;
`;

export const TotalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px;
	padding: 10px 0;
	border-top: 1px solid #e5e5e5;
	border-bottom: 1px solid #e5e5e5;

	& > div {
		margin: 0 5px;
	}
`;

export const ButtonGroup = styled.div`
	margin: 0 20px;
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
`;
