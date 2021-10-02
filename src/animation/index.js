import { keyframes } from 'styled-components';

export const slideShow = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-100px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const slideShow2 = keyframes`
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const searchShow = keyframes`
	0%{
		width: 0;
		opacity: 0;
	}
	100%{
		width: 300px;
		opacity: 1;
	}
`;

export const walking = keyframes`
	0%{
		right: 0;
	}
	100%{
		right: 180px
	}
`;

export const fade = keyframes`
	0%{
		width: 0;
		height: 0;
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		width: 100%;
		height: 100%;
		opacity: 0;
	}
`;
