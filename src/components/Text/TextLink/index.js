import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextLink = ({ children, href = '/', fontSize = 'medium' }) => (
	<TextLinkWapper to={href} fontSize={fontSize}>
		{children}
	</TextLinkWapper>
);

TextLink.propTypes = {
	href: PropTypes.string,
	children: PropTypes.string.isRequired,
	fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

const TextLinkWapper = styled(Link)`
	color: #666;
	font-weight: 500;
	font-size: 1.2rem;

	&:hover {
		color: #d32512;
	}

	${({ fontSize }) => css`
		font-size: ${fontSize === 'large' && '1.2rem'};
		font-size: ${fontSize === 'medium' && '1.1rem'};
		font-size: ${fontSize === 'small' && '1rem'};
	`}
`;

export default TextLink;
