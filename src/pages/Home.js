import Banner from '../components/Banner'
import InfoNav from '../components/InfoNav'
import Navbar from '../components/Navbar'
import CategorySlide from '../components/CategorySlide'
import ItemSection from '../components/ItemSection'
import Trending from '../components/Trending'
import Combo from '../components/Combo'
import ProImage1 from '../assets/hero-section-1.jpg'
import PriceImage1 from '../assets/price-badge-1.png'
import ProImage2 from '../assets/hero-section-2.jpg'
import PriceImage2 from '../assets/price-badge-2.png'
import Brand from '../components/Brand'
import LatestNews from '../components/LastestNews'
import Footer from '../components/Footer'
import Scrollbars from '../components/Scrollbars'
import { useState } from 'react'

const Home = () => {
	const [isScroll, setIsScroll] = useState(false)
	const handleScroll = ({ target: { scrollTop, clientWidth } }) => {
		scrollTop > 100 && clientWidth >= 1200 ? setIsScroll(true) : setIsScroll(false)
	}
	return (
		<Scrollbars onScroll={handleScroll} maxHeight='100vh' thumbSize={300} size='large'>
			<InfoNav />

			<Navbar isScroll={isScroll} />

			<Banner />

			<CategorySlide />

			<ItemSection
				image={ProImage1}
				discount={PriceImage1}
				title="Let's Happy Hours!"
				content='We are proud of our coffee shop with the highest-quality products, most inviting stores, friendliest staff and the best coffee in the world.'
			/>

			<Trending />

			<ItemSection
				gray
				reverse
				image={ProImage2}
				discount={PriceImage2}
				title='Hungry Like A Wolf!'
				content='We are proud of our coffee shop with the highest-quality products, most inviting stores, friendliest staff and the best coffee in the world.'
			/>

			<Combo />

			<Brand />

			<LatestNews />

			<Footer />
		</Scrollbars>
	)
}

export default Home
