import {
	ButtonGroup,
	CartItem,
	ImageWrapper,
	ItemImage,
	ItemInfoWrapper,
	TotalWrapper,
} from './CartInfoElements';
import { Typography } from '../../Text';
import Display from '../../Display';
import { ButtonLink } from '../../Button';
import Scrollbars from '../../Scrollbars';
import { SvgIcon } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { product } from '../../../helpers/images';

const CartInfo = () => {
	return (
		<Display method='flex' flexDirection='column'>
			<Scrollbars maxHeight={225} padding='10px'>
				<CartItem>
					<ImageWrapper>
						<ItemImage src={product.item1} />
					</ImageWrapper>
					<ItemInfoWrapper>
						<Display method='flex' justifyContent='space-between'>
							<Typography>Giá cả</Typography>
							<Typography>x</Typography>
							<Typography>$2000</Typography>
						</Display>
						<Display method='flex' justifyContent='space-between'>
							<Typography>SL</Typography>
							<Typography>1</Typography>
						</Display>
					</ItemInfoWrapper>
					<SvgIcon fontSize='small' component={CloseOutlined} />
				</CartItem>
				<CartItem>
					<ImageWrapper>
						<ItemImage src={product.item1} />
					</ImageWrapper>
					<ItemInfoWrapper>
						<Display method='flex' justifyContent='space-between'>
							<Typography>Giá cả</Typography>
							<Typography>x</Typography>
							<Typography>$2000</Typography>
						</Display>
						<Display method='flex' justifyContent='space-between'>
							<Typography>SL</Typography>
							<Typography>1</Typography>
						</Display>
					</ItemInfoWrapper>
					<SvgIcon fontSize='small' component={CloseOutlined} />
				</CartItem>
				<CartItem>
					<ImageWrapper>
						<ItemImage src={product.item1} />
					</ImageWrapper>
					<ItemInfoWrapper>
						<Display method='flex' justifyContent='space-between'>
							<Typography>Giá cả</Typography>
							<Typography>x</Typography>
							<Typography>$2000</Typography>
						</Display>
					</ItemInfoWrapper>
					<SvgIcon fontSize='small' component={CloseOutlined} />
				</CartItem>
			</Scrollbars>
			<TotalWrapper>
				<Display method='flex' justifyContent='space-between'>
					<Typography>Total</Typography>
					<Typography color='black'>$2000</Typography>
				</Display>
				<Display method='flex' justifyContent='space-between'>
					<Typography>Vat(20%)</Typography>
					<Typography color='black'>$400</Typography>
				</Display>
			</TotalWrapper>
			<ButtonGroup>
				<ButtonLink>View Cart</ButtonLink>
				<ButtonLink color='secondary'>Checkout</ButtonLink>
			</ButtonGroup>
		</Display>
	);
};

export default CartInfo;
