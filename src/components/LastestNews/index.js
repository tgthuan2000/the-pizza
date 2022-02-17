import LazyLoad from 'react-lazyload'
import Container from '../Container'
import BgSection from '../BgSection'
import {
	Date,
	DateContainer,
	Desc,
	Image,
	ImageWrapper,
	NewsItem,
	NewsList,
	ReadMore,
	SearchBtn,
	Title,
	Wrapper,
	WrapperImgItem,
} from './LatestNewsElements'
import { useEffect, useRef, useState } from 'react'
import { useTimeout } from '../../hooks'
import { ArrowForwardIosOutlined, EventNote, Search } from '@mui/icons-material'
import { latestNews, line } from '../../helpers/images'

const items = [
	{ image: latestNews.item1 },
	{ image: latestNews.item2 },
	{ image: latestNews.item3 },
	{ image: latestNews.item4 },
	{ image: latestNews.item5 },
]

const LatestNews = () => {
	const totalItems = 5
	const itemOnScreen = useRef(3) // <= 960: 2, else 3
	const slideNumber = totalItems - itemOnScreen.current + 1
	const [slide, setSlide] = useState(0)

	const handleClickPagination = (direction) => {
		direction === 'left' && setSlide((slide === 0 ? slideNumber : slide) - 1)
		direction === 'right' && setSlide((slide + 1) % slideNumber)
	}

	useTimeout(() => {
		setSlide((slide + 1) % slideNumber)
	}, 4000)

	// useResize(() => {
	// 	const size = window.innerWidth;
	// 	if (size <= 960) return (itemOnScreen.current = 2);
	// 	return (itemOnScreen.current = 3);
	// });

	useEffect(() => {
		const a = () => {
			const size = window.innerWidth
			if (size <= 600) return (itemOnScreen.current = 1)
			if (size <= 960) return (itemOnScreen.current = 2)
			return (itemOnScreen.current = 3)
		}
		a()
		window.addEventListener('resize', a)
		return () => window.removeEventListener('resize', a)
	}, [])

	return (
		<LazyLoad height={500} offset={100} placeholder={<div>Loadding...</div>} once>
			<BgSection
				beforeLine={line.banner}
				beforeHeight='85px'
				afterLine={line.white}
				afterHeight='20px'
				padding='100px 0 50px'
				bgImage={latestNews.bg}
				headerTitle='Latest News'
				onPaginateLeftClick={() => handleClickPagination('left')}
				onPaginateRightClick={() => handleClickPagination('right')}
			>
				<Container>
					<Wrapper>
						<NewsList slide={slide}>
							{items.map((item, index) => (
								<Item
									href='/'
									imgSrc={item.image}
									searchLink='/'
									date='2020 / 12 / 31'
									title={`Product ${index + 1}`}
									desc='Product Descriptions'
								/>
							))}
						</NewsList>
					</Wrapper>
				</Container>
			</BgSection>
		</LazyLoad>
	)
}

const Item = ({ href, searchLink, imgSrc, date, title, desc }) => (
	<NewsItem>
		<WrapperImgItem>
			<ImageWrapper to={href}>
				<Image src={imgSrc} />
			</ImageWrapper>
			<SearchBtn to={searchLink}>
				<Search />
			</SearchBtn>
		</WrapperImgItem>
		<DateContainer>
			<EventNote />
			<Date>{date}</Date>
		</DateContainer>
		<Title to={href}>{title}</Title>
		<Desc>{desc}</Desc>
		<ReadMore to={href}>
			Read More
			<ArrowForwardIosOutlined fontSize='small' />
		</ReadMore>
	</NewsItem>
)

export default LatestNews
