import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Position = ({ method = 'relative', pointer = false, children, ...props }) => {
	return (
		<PositionContainer position={method} pointer={pointer} {...props}>
			{children}
		</PositionContainer>
	);
};

const PositionContainer = styled.div`
	${({ position, top, left, right, bottom, zIndex, pointer }) => css`
		position: ${position};
		top: ${top};
		left: ${left};
		right: ${right};
		bottom: ${bottom};
		z-index: ${zIndex};
		cursor: ${pointer && 'pointer'};
	`}
`;

Position.propTypes = {
	method: PropTypes.oneOf(['relative', 'absolute', 'fixed', 'sticky']),
	top: PropTypes.string,
	left: PropTypes.string,
	right: PropTypes.string,
	bottom: PropTypes.string,
	zIndex: PropTypes.number,
	pointer: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Position;
