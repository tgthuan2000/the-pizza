import Container from '../Container';
import {
	ButtonGroup,
	ContentContainer,
	TrendingButtonGroup,
	ImageContainer,
	ProductImg,
	ProductItem,
	ProductList,
	ProductName,
	ProductPrice,
	WrappImgLink,
	WrapperTrendding,
	ProductWrapper,
} from './TrendingElements';
import { ButtonIcon, TrendingButton } from '../Button';
import LazyLoad from 'react-lazyload';
import BgSection from '../BgSection';
import { useState, useRef, useEffect } from 'react';
import { line, product, trending } from '../../helpers/images';
import {
	AddShoppingCartOutlined,
	AssessmentOutlined,
	FavoriteBorderOutlined,
	VisibilityOutlined,
} from '@mui/icons-material';

const Trending = () => {
	const totalItems = 9;
	const itemOnScreen = useRef(4); //
	const slideNumber = Math.ceil(totalItems / itemOnScreen.current);
	const [slide, setSlide] = useState(0);

	const handleClickPagination = (direction) => {
		direction === 'left' && setSlide((slide === 0 ? slideNumber : slide) - 1);
		direction === 'right' && setSlide((slide + 1) % slideNumber);
	};

	// useResize(() => {
	// 	const size = window.innerWidth;
	// 	if (size <= 744) return (itemOnScreen.current = 2);
	// 	if (size <= 960) return (itemOnScreen.current = 3);
	// 	return (itemOnScreen.current = 4);
	// });
	useEffect(() => {
		const a = () => {
			const size = window.innerWidth;
			if (size <= 550) return (itemOnScreen.current = 1);
			if (size <= 744) return (itemOnScreen.current = 2);
			if (size <= 960) return (itemOnScreen.current = 3);
			return (itemOnScreen.current = 4);
		};
		a();
		window.addEventListener('resize', a);
		return () => window.removeEventListener('resize', a);
	}, []);

	return (
		<LazyLoad height={500} offset={100} placeholder={<div>Loadding...</div>} once>
			<BgSection
				beforeLine={line.white}
				beforeHeight='20px'
				afterLine={line.white}
				afterHeight='20px'
				padding='50px 0'
				bgImage={trending.bg}
				headerTitle='Trending section'
				onPaginateLeftClick={() => handleClickPagination('left')}
				onPaginateRightClick={() => handleClickPagination('right')}>
				<TrendingButtonGroup>
					<TrendingButton active>Feature</TrendingButton>
					<TrendingButton>Feature</TrendingButton>
					<TrendingButton>Feature</TrendingButton>
					<TrendingButton>Feature</TrendingButton>
					<TrendingButton>Feature</TrendingButton>
				</TrendingButtonGroup>
				<Container margin='20px auto'>
					<WrapperTrendding>
						<ProductList slide={slide}>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
							<Product
								href='/'
								proImg={product.item1}
								proName='product name nè'
								proPrice='$ 123.00'
							/>
						</ProductList>
					</WrapperTrendding>
				</Container>
			</BgSection>
		</LazyLoad>
	);
};

const Product = ({
	href = '/',
	proImg,
	proName,
	proPrice,
	onAddCartClick,
	onAddFavoriteClick,
	onAssessClick,
	onOpenViewClick,
}) => (
	<ProductWrapper>
		<ProductItem>
			<ImageContainer>
				<WrappImgLink to={href}>
					<ProductImg src={proImg} />
				</WrappImgLink>
				<ButtonGroupHover
					onAddCartClick={onAddCartClick}
					onAddFavoriteClick={onAddFavoriteClick}
					onAssessClick={onAssessClick}
					onOpenViewClick={onOpenViewClick}
				/>
			</ImageContainer>
			<ContentContainer>
				<ProductName to={href}>{proName}</ProductName>
				<ProductPrice>{proPrice}</ProductPrice>
			</ContentContainer>
		</ProductItem>
	</ProductWrapper>
);

const ButtonGroupHover = ({
	onAddCartClick,
	onAddFavoriteClick,
	onAssessClick,
	onOpenViewClick,
}) => (
	<ButtonGroup>
		<ButtonIcon title='Thêm giỏ hàng' onClick={onAddCartClick}>
			<AddShoppingCartOutlined fontSize='small' />
		</ButtonIcon>
		<ButtonIcon title='Thêm vào yêu thích' onClick={onAddFavoriteClick}>
			<FavoriteBorderOutlined fontSize='small' />
		</ButtonIcon>
		<ButtonIcon title='Thêm vào so sánh' onClick={onAssessClick}>
			<AssessmentOutlined fontSize='small' />
		</ButtonIcon>
		<ButtonIcon title='Xem' onClick={onOpenViewClick}>
			<VisibilityOutlined fontSize='small' />
		</ButtonIcon>
	</ButtonGroup>
);

export default Trending;
