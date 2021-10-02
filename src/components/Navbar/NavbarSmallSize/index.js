import { useRef, useState } from 'react';
import Logo from '../../Logo';
import Cart from '../../Cart';
import { NavIcon } from '../../Icon';
import { SearchSmall } from '../../Search';
import { NavbarSmallWrapper, NavSmallContainer, NavWrapper } from './NavbarSmallSizeElements';
import { MenuOutlined, PersonOutlineOutlined } from '@mui/icons-material';

const NavbarSmallSize = () => {
	const [showBtnSearch, setShowBtnSearch] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const inputRef = useRef(null);
	const handleClickShowBtnSearch = () => {
		setShowBtnSearch(!showBtnSearch);
		setShowCart(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(inputRef.current.value);
	};
	const handleShowCart = () => {
		setShowCart(!showCart);
		setShowBtnSearch(false);
	};
	return (
		<NavSmallContainer>
			<Logo center />
			<NavbarSmallWrapper>
				<NavWrapper>
					<NavIcon icon={MenuOutlined} />
				</NavWrapper>
				<NavWrapper>
					<SearchSmall
						ref={inputRef}
						isShow={showBtnSearch}
						onClick={handleClickShowBtnSearch}
						onSubmit={handleSubmit}
					/>
					<NavIcon icon={PersonOutlineOutlined} />
					<Cart isShow={showCart} onClick={handleShowCart} />
				</NavWrapper>
			</NavbarSmallWrapper>
		</NavSmallContainer>
	);
};

export default NavbarSmallSize;
