import {
	ArrowLeft,
	ArrowRight,
	BrandContainer,
	BrandImg,
	BrandItem,
	BrandList,
	Wrapper,
} from './BrandElements';
import Container from '../Container';
import LazyLoad from 'react-lazyload';
import { useEffect, useRef, useState } from 'react';
import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material';
import { brand } from '../../helpers/images';

const Brand = () => {
	const brandLength = 8;
	const itemOnScreen = useRef(5); // <=960: 4 items, <=744: 3 items, <= 550 : 2 items, else 5 items
	const items = brandLength - itemOnScreen.current;
	const [slide, setSlide] = useState(0);
	const handleClick = (direction) => {
		direction === 'left' && setSlide(slide - 1);
		direction === 'right' && setSlide(slide + 1);
	};
	// useResize(() => {
	// 	const size = window.innerWidth;
	// 	if (size <= 550) return (itemOnScreen.current = 2);
	// 	if (size <= 744) return (itemOnScreen.current = 3);
	// 	if (size <= 960) return (itemOnScreen.current = 4);
	// 	return (itemOnScreen.current = 5);
	// });

	useEffect(() => {
		const a = () => {
			const size = window.innerWidth;
			if (size <= 550) return (itemOnScreen.current = 2);
			if (size <= 744) return (itemOnScreen.current = 3);
			if (size <= 960) return (itemOnScreen.current = 4);
			return (itemOnScreen.current = 5);
		};
		a();
		window.addEventListener('resize', a);
		return () => window.removeEventListener('resize', a);
	}, []);

	return (
		<LazyLoad height={100} offset={100} placeholder={<div>Loadding...</div>} once>
			<BrandContainer>
				<Container margin='50px auto'>
					<Wrapper>
						<BrandList slide={slide}>
							<BrandItem>
								<BrandImg src={brand.item1} />
							</BrandItem>
							<BrandItem>
								<BrandImg src={brand.item2} />
							</BrandItem>
							<BrandItem>
								<BrandImg src={brand.item3} />
							</BrandItem>
							<BrandItem>
								<BrandImg src={brand.item4} />
							</BrandItem>
							<BrandItem>
								<BrandImg src={brand.item5} />
							</BrandItem>
							<BrandItem>
								<BrandImg src={brand.item6} />
							</BrandItem>
							<BrandItem>
								<BrandImg src={brand.item7} />
							</BrandItem>
							<BrandItem>
								<BrandImg src={brand.item8} />
							</BrandItem>
						</BrandList>
						{slide > 0 && (
							<ArrowLeft onClick={() => handleClick('left')}>
								<ArrowBackOutlined fontSize='small' />
							</ArrowLeft>
						)}
						{slide < items && (
							<ArrowRight onClick={() => handleClick('right')}>
								<ArrowForwardOutlined fontSize='small' />
							</ArrowRight>
						)}
					</Wrapper>
				</Container>
			</BrandContainer>
		</LazyLoad>
	);
};

export default Brand;
