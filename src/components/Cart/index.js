import { NavIcon } from '../Icon';
import Position from '../Position';
// import CartInfo from './CartInfo';
import PropTypes from 'prop-types';
import { CartInfoWrapper } from './CartElements';
import CartInfo from './CartInfo';
import { ShoppingCartOutlined } from '@mui/icons-material';
// import { Typography } from '../Text';

const Cart = ({ isShow, onClick }) => {
	return (
		<NavIcon icon={ShoppingCartOutlined} onClick={onClick}>
			{isShow && (
				<Position method='absolute' top='calc(100% + 10px)' right='-10px' zIndex={4}>
					<CartInfoWrapper>
						<CartInfo />
						{/* <CartEmpty /> */}
					</CartInfoWrapper>
				</Position>
			)}
		</NavIcon>
	);
};

Cart.propTypes = {
	isShow: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

// const CartEmpty = () => (
// 	<Typography textAlign='center' margin='20px 0' fontSize='medium'>
// 		Giỏ hàng đang trống !
// 	</Typography>
// );

export default Cart;
