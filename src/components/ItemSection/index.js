import {
	Content,
	ContentContainer,
	ImageContainer,
	BadgeImg,
	ProductImg,
	Title,
	Wrapper,
	LogoWrapper,
	ItemSectionWrapper,
} from './ItemSectionElements'
import Container from '../Container'
import Logo from '../Logo'
import { ButtonLink } from '../Button'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

const ItemSection = ({ reverse, gray, image, discount, title, content }) => {
	return (
		<LazyLoad height={500} offset={100} placeholder={<div>Loadding...</div>} once>
			<ItemSectionWrapper isGray={gray}>
				<Container>
					<Wrapper reverse={reverse}>
						<ImageContainer to='/'>
							<ProductImg src={image} />
							<BadgeImg src={discount} />
						</ImageContainer>
						<ContentContainer>
							<LogoWrapper>
								<Logo />
							</LogoWrapper>
							<Title>{title}</Title>
							<Content>{content}</Content>
							<ButtonLink to='/'>More</ButtonLink>
						</ContentContainer>
					</Wrapper>
				</Container>
			</ItemSectionWrapper>
		</LazyLoad>
	)
}

ItemSection.propTypes = {
	reverse: PropTypes.bool,
	isGray: PropTypes.bool,
	image: PropTypes.string.isRequired,
	discount: PropTypes.string.isRequired,
	title: PropTypes.string,
	content: PropTypes.string,
}

export default ItemSection
