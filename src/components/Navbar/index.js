import { useEffect, useState } from 'react';
import NavbarSmallSize from './NavbarSmallSize/index';
import NavbarBigSize from './NavbarBigSize/index';

const Navbar = ({ isScroll }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const a = () => {
			const size = window.innerWidth;
			if (size <= 960) return setShow(false);
			return setShow(true);
		};
		a();
		window.addEventListener('resize', a);
		return () => window.removeEventListener('resize', a);
	}, []);

	return show ? <NavbarBigSize isScroll={isScroll} /> : <NavbarSmallSize />;
};

export default Navbar;
