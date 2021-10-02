import {
	BottomList,
	BottomItemLink,
	Box,
	BoxIcon,
	BoxInfo,
	InfoTitle,
	InfoContent,
	NavContainer,
	Top,
	Wrapper,
	SearchWrapper,
} from './ShowElements';
import Container from '../../Container';
import Logo from '../../Logo';
import { SearchBig } from '../../Search';
import { SvgIcon } from '@mui/material';
import { PhoneCallbackOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const NavbarBigSizeShow = () => {
	return (
		<NavContainer>
			<Container margin='50px auto 10px'>
				<Top>
					<Box>
						<BoxIcon>
							<SvgIcon fontSize='large' component={PhoneCallbackOutlined} />
						</BoxIcon>
						<BoxInfo>
							<InfoTitle>Đặt hàng qua</InfoTitle>
							<InfoContent>058 291 1855</InfoContent>
						</BoxInfo>
					</Box>
					<Logo />
					<Wrapper>
						<SearchWrapper>
							<SearchBig />
						</SearchWrapper>
						<Box>
							<BoxIcon>
								<SvgIcon fontSize='large' component={ShoppingCartOutlined} />
							</BoxIcon>
							<BoxInfo>
								<InfoTitle>Giỏ hàng</InfoTitle>
								<InfoContent>Chưa có món</InfoContent>
							</BoxInfo>
						</Box>
					</Wrapper>
				</Top>
				<BottomList>
					<BottomItemLink to='/'>Item 1</BottomItemLink>
					<BottomItemLink to='/'>Item 2</BottomItemLink>
					<BottomItemLink to='/'>Item 3</BottomItemLink>
					<BottomItemLink to='/'>Item 4</BottomItemLink>
					<BottomItemLink to='/'>Item 5</BottomItemLink>
				</BottomList>
			</Container>
		</NavContainer>
	);
};

export default NavbarBigSizeShow;
