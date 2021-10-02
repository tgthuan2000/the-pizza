import { Box, Image, Item, WrapLink, Wrapper } from './ComboElements';
import Container from '../Container';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { combo } from '../../helpers/images';

const Combo = () => {
	return (
		<LazyLoad height={200} offset={100} placeholder={<div>Loadding...</div>} once>
			<Container margin='50px auto'>
				<Wrapper>
					<ComboBox href='/' colorLine='red' imageSrc={combo.item1} />
					<ComboBox href='/' imageSrc={combo.item2} />
				</Wrapper>
			</Container>
		</LazyLoad>
	);
};

const ComboBox = ({ href = '/', colorLine = 'yellow', imageSrc }) => (
	<Box color={colorLine}>
		<Item color={colorLine}>
			<WrapLink to={href}>
				<Image src={imageSrc} />
			</WrapLink>
		</Item>
	</Box>
);

ComboBox.propTypes = {
	href: PropTypes.string,
	colorLine: PropTypes.oneOf(['red', 'yellow']),
};

export default Combo;
