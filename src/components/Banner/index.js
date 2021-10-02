import { useState } from 'react';
import { BannerContainer, ArrowLeft, ArrowRight, SliderItem, SliderList } from './BannerElements';
import { useTimeout } from '../../hooks';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { banner } from '../../helpers/images';

const Banner = () => {
	const numberSlide = 4;
	const [slide, setSlide] = useState(0);
	const handleClick = (direction) => {
		setSlide(
			direction === 'right'
				? (slide + 1) % numberSlide
				: slide > 0
				? slide - 1
				: numberSlide - 1
		);
	};

	useTimeout(() => {
		setSlide((slide + 1) % numberSlide);
	}, 8000);

	return (
		<BannerContainer>
			<ArrowLeft onClick={() => handleClick('left')}>
				<SvgIcon component={ArrowBackIosOutlined} />
			</ArrowLeft>
			<ArrowRight onClick={() => handleClick('right')}>
				<SvgIcon component={ArrowForwardIosOutlined} />
			</ArrowRight>
			<SliderList slide={slide}>
				<SliderItem src={banner.item1}></SliderItem>
				<SliderItem src={banner.item2}></SliderItem>
				<SliderItem src={banner.item1}></SliderItem>
				<SliderItem src={banner.item2}></SliderItem>
			</SliderList>
		</BannerContainer>
	);
};

export default Banner;
