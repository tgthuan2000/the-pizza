import { NavContainer, NavWrapper } from './StickyElements';
import Container from '../../Container';
import Logo from '../../Logo';
import {
	BottomItemLink,
	BottomList,
	Box,
	BoxIcon,
	BoxInfo,
	InfoContent,
	InfoTitle,
	SearchWrapper,
	Wrapper,
} from './ShowElements';
import { SearchBig } from '../../Search';
import { SvgIcon } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';

const NavbarBigSizeSticky = () => {
	return (
		<NavContainer>
			<Container>
				<NavWrapper>
					<Logo />
					<BottomList>
						<BottomItemLink to='/'>Item 1</BottomItemLink>
						<BottomItemLink to='/'>Item 2</BottomItemLink>
						<BottomItemLink to='/'>Item 3</BottomItemLink>
						<BottomItemLink to='/'>Item 4</BottomItemLink>
						<BottomItemLink to='/'>Item 5</BottomItemLink>
					</BottomList>
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
				</NavWrapper>
			</Container>
		</NavContainer>
	);
};

export default NavbarBigSizeSticky;
