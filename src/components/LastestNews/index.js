import LazyLoad from 'react-lazyload';
import Container from '../Container';
import BgSection from '../BgSection';
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
} from './LatestNewsElements';
import { useEffect, useRef, useState } from 'react';
import { useTimeout } from '../../hooks';
import { ArrowForwardIosOutlined, EventNote, Search } from '@mui/icons-material';
import { latestNews, line } from '../../helpers/images';

const LatestNews = () => {
	const totalItems = 5;
	const itemOnScreen = useRef(3); // <= 960: 2, else 3
	const slideNumber = totalItems - itemOnScreen.current + 1;
	const [slide, setSlide] = useState(0);

	const handleClickPagination = (direction) => {
		direction === 'left' && setSlide((slide === 0 ? slideNumber : slide) - 1);
		direction === 'right' && setSlide((slide + 1) % slideNumber);
	};

	useTimeout(() => {
		setSlide((slide + 1) % slideNumber);
	}, 4000);

	// useResize(() => {
	// 	const size = window.innerWidth;
	// 	if (size <= 960) return (itemOnScreen.current = 2);
	// 	return (itemOnScreen.current = 3);
	// });

	useEffect(() => {
		const a = () => {
			const size = window.innerWidth;
			if (size <= 600) return (itemOnScreen.current = 1);
			if (size <= 960) return (itemOnScreen.current = 2);
			return (itemOnScreen.current = 3);
		};
		a();
		window.addEventListener('resize', a);
		return () => window.removeEventListener('resize', a);
	}, []);

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
				onPaginateRightClick={() => handleClickPagination('right')}>
				<Container>
					<Wrapper>
						<NewsList slide={slide}>
							<Item
								href='/'
								imgSrc={latestNews.item1}
								searchLink='/'
								date='2020 / 12 / 31'
								title='title'
								desc='desc'
							/>
							<Item
								href='/'
								imgSrc={latestNews.item2}
								searchLink='/'
								date='2020 / 12 / 31'
								title='title'
								desc='desc'
							/>
							<Item
								href='/'
								imgSrc={latestNews.item3}
								searchLink='/'
								date='2020 / 12 / 31'
								title='title'
								desc='desc'
							/>
							<Item
								href='/'
								imgSrc={latestNews.item4}
								searchLink='/'
								date='2020 / 12 / 31'
								title='title'
								desc='desc'
							/>
							<Item
								href='/'
								imgSrc={latestNews.item5}
								searchLink='/'
								date='2020 / 12 / 31'
								title='title'
								desc='desc'
							/>
						</NewsList>
					</Wrapper>
				</Container>
			</BgSection>
		</LazyLoad>
	);
};

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
);

export default LatestNews;
