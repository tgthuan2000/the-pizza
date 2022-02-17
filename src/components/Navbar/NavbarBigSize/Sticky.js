import { NavContainer, NavWrapper } from './StickyElements'
import Container from '../../Container'
import Logo from '../../Logo'
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
} from './ShowElements'
import { SearchBig } from '../../Search'
import { SvgIcon } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material'

const NavbarBigSizeSticky = () => {
	return (
		<NavContainer>
			<Container>
				<NavWrapper>
					<Logo />
					<BottomList>
						{Array.from(new Array(5)).map((item, index) => (
							<BottomItemLink to='/'>Page {index + 1}</BottomItemLink>
						))}
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
								<InfoTitle>Cart</InfoTitle>
								<InfoContent>Empty</InfoContent>
							</BoxInfo>
						</Box>
					</Wrapper>
				</NavWrapper>
			</Container>
		</NavContainer>
	)
}

export default NavbarBigSizeSticky
