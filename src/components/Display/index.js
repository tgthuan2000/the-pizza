import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Display = ({ method = 'block', children, ...props }) => {
	return (
		<DisplayWrapper method={method} {...props}>
			{children}
		</DisplayWrapper>
	);
};

Display.propTypes = {
	method: PropTypes.oneOf(['flex', 'block', 'inline']).isRequired,
	justifyContent: PropTypes.oneOf([
		'center',
		'flex-start',
		'flex-end',
		'space-between',
		'space-evenly',
		'space-around',
	]),
	alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
	flexDirection: PropTypes.oneOf(['column', 'row', 'column-reverse', 'row-reverse']),
	flex: PropTypes.number,
	margin: PropTypes.string,
	padding: PropTypes.string,
};

const DisplayWrapper = styled.div`
	${({ method, justifyContent, alignItems, flex, flexDirection, margin, padding }) => css`
		display: ${method};
		justify-content: ${justifyContent};
		align-items: ${alignItems};
		flex: ${flex};
		flex-direction: ${flexDirection};
		margin: ${margin};
		padding: ${padding};
	`}
`;

export default Display;
