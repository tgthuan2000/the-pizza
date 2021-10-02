import styled from 'styled-components';

export const NavSmallContainer = styled.div`
	padding: 30px 15px 0;
`;

export const NavbarSmallWrapper = styled.div`
	margin-top: 10px;
	padding: 15px 0 10px;
	border-top: 1px solid rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavWrapper = styled.div`
	display: flex;
	align-items: center;

	& > div + div {
		margin-left: 10px;
	}
`;
