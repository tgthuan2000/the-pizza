import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = ({ children, ...props }) => (
	<ContainerWrapper {...props}>{children}</ContainerWrapper>
);

Container.propTypes = {
	margin: PropTypes.string,
};

const ContainerWrapper = styled.div`
	position: relative;
	padding-left: 20px;
	padding-right: 20px;
	margin: ${({ margin }) => margin || '0 auto'};
	max-width: 1300px;
	width: 100%;

	@media screen and (max-width: 960px) {
		padding: 0 15px;
	}
`;
export default Container;
