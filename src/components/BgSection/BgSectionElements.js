import styled, { css } from 'styled-components';

export const BgSectionContainer = styled.div`
	${({ bgImage, padding, beforeLine, beforeHeight, afterLine, afterHeight }) => css`
		background: url(${bgImage}) center no-repeat;
		padding: ${padding};
		background-color: #111;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			z-index: 1;
			background: url(${beforeLine}) center bottom;
			left: 0;
			right: 0;
			top: 0;
			height: ${beforeHeight};
		}

		&::after {
			content: '';
			position: absolute;
			z-index: 1;
			background: url(${afterLine}) center top;
			left: 0;
			right: 0;
			bottom: 0;
			height: ${afterHeight};
		}
	`}
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 15px;
`;

export const LogoWrapper = styled.div`
	margin-bottom: 10px;
`;

export const HeaderTitle = styled.h5`
	color: white;
	font-size: 3.5rem;
	font-weight: 500;
	margin-bottom: 10px;
	text-align: center;

	@media screen and (max-width: 960px) {
		font-size: 3rem;
	}
	@media screen and (max-width: 744px) {
		font-size: 2rem;
	}
	@media screen and (max-width: 500px) {
		font-size: 1.5rem;
	}
`;
