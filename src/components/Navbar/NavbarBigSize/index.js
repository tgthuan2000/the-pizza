import NavbarBigSizeShow from './Show';
import NavbarBigSizeSticky from './Sticky';

const NavbarBigSize = ({ isScroll }) => {
	return isScroll ? (
		<>
			<div style={{ height: '170px' }} />
			<NavbarBigSizeSticky />
		</>
	) : (
		<NavbarBigSizeShow />
	);
};

export default NavbarBigSize;
