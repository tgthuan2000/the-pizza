import styled, { css } from 'styled-components';

const CustomTrack = styled.div`
	${({ styled }) => styled}
	z-index: 999;
	border-radius: 10px;
`;

export const TrackVertical = styled(CustomTrack)`
	right: 2px;
	${({ size }) => css`
		width: ${size === 'small' && '4px'};
		width: ${size === 'medium' && '6px'};
		width: ${size === 'large' && '8px'};
	`}

	${({ padding }) => css`
		bottom: ${padding || '5px'};
		top: ${padding || '5px'};
	`}
	
	@media screen and (max-width: 960px) {
		width: 12px;
		bottom: 10px;
		top: 10px;
	}
`;

export const TrackHorizontal = styled(CustomTrack)`
	bottom: 2px;
	${({ size }) => css`
		height: ${size === 'small' && '4px'};
		height: ${size === 'medium' && '6px'};
		height: ${size === 'large' && '8px'};
	`}

	${({ padding }) => css`
		right: ${padding || '5px'};
		left: ${padding || '5px'};
	`}

	@media screen and (max-width: 960px) {
		height: 12px;
		right: 10px;
		left: 10px;
	}
`;

export const CustomThumb = styled.div`
	${({ styled }) => styled}
	cursor: pointer;
	background: rgba(0, 0, 0, 0.6);
	border-radius: 10px;
`;
