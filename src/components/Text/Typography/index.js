import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Typography = ({ children, fontSize = 'small', ...props }) => {
	return (
		<TypographyWrapper fontSize={fontSize} {...props}>
			{children}
		</TypographyWrapper>
	);
};

Typography.propTypes = {
	fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	margin: PropTypes.string,
	textAlign: PropTypes.oneOf(['center', 'left', 'right']),
};

const TypographyWrapper = styled.p`
	color: #666;
	font-weight: 500;
	line-height: 20px;

	${({ fontSize, color, margin, textAlign }) => css`
		font-size: ${fontSize === 'large' && '1.2rem'};
		font-size: ${fontSize === 'medium' && '1.1rem'};
		font-size: ${fontSize === 'small' && '1rem'};
		color: ${color};
		margin: ${margin};
		text-align: ${textAlign};

		@media screen and (max-width: 960px) {
			font-size: ${fontSize === 'large' && '1.1rem'};
			font-size: ${fontSize === 'medium' && '1rem'};
			font-size: ${fontSize === 'small' && '0.8rem'};
		}
	`}
`;

export default Typography;
