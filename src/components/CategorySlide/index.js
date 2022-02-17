import {
	CategorySlideContainer,
	Heading,
	Image,
	SliderItem,
	SliderList,
	TopBottomLine,
	WrapImg,
	WrapLink,
	Wrapper,
} from './CategorySlideElements'

import { useRef, useState, useEffect } from 'react'
import Container from '../Container'
import LazyLoad from 'react-lazyload'
import { useTimeout } from '../../hooks'
import PropTypes from 'prop-types'
import { category } from '../../helpers/images'

const CategorySlide = () => {
	const totalItems = 4
	const itemOnScreen = useRef(3) // <=960: 2 items ; <=500: 1 item ; else 3 items
	const slideNumber = totalItems - itemOnScreen.current + 1
	const [slide, setSlide] = useState(0)
	useTimeout(() => {
		setSlide((slide + 1) % slideNumber)
	}, 4000)
	// useResize(() => {
	// 	const size = window.innerWidth;
	// 	if (size <= 500) return (itemOnScreen.current = 1);
	// 	if (size <= 960) return (itemOnScreen.current = 2);
	// 	return (itemOnScreen.current = 3);
	// });
	useEffect(() => {
		const a = () => {
			const size = window.innerWidth
			if (size <= 500) return (itemOnScreen.current = 1)
			if (size <= 960) return (itemOnScreen.current = 2)
			return (itemOnScreen.current = 3)
		}
		a()
		window.addEventListener('resize', a)
		return () => window.removeEventListener('resize', a)
	}, [])
	return (
		<LazyLoad height={500} offset={100} placeholder={<div>Loadding...</div>} once>
			<CategorySlideContainer>
				<Container margin='50px auto'>
					<Wrapper>
						<Heading>Are you hungry yet?</Heading>
						<SliderList slides={slide}>
							<Item coloLine='red' imgSrc={category.item1} />
							<Item imgSrc={category.item2} />
							<Item coloLine='red' imgSrc={category.item3} />
							<Item imgSrc={category.item4} />
						</SliderList>
					</Wrapper>
				</Container>
			</CategorySlideContainer>
		</LazyLoad>
	)
}

const Item = ({ href = '/', coloLine = 'yellow', imgSrc }) => (
	<SliderItem>
		<WrapLink to={href} color={coloLine}>
			<TopBottomLine color={coloLine}>
				<WrapImg>
					<Image src={imgSrc} />
				</WrapImg>
			</TopBottomLine>
		</WrapLink>
	</SliderItem>
)

Item.propTypes = {
	href: PropTypes.string,
	imgSrc: PropTypes.string,
	coloLine: PropTypes.oneOf(['red', 'yellow']),
}

export default CategorySlide
