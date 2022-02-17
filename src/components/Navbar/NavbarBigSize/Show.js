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
} from './ShowElements'
import Container from '../../Container'
import Logo from '../../Logo'
import { SearchBig } from '../../Search'
import { SvgIcon } from '@mui/material'
import { PhoneCallbackOutlined, ShoppingCartOutlined } from '@mui/icons-material'

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
							<InfoTitle>Hotline</InfoTitle>
							<InfoContent>058-291-1855</InfoContent>
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
								<InfoTitle>Cart</InfoTitle>
								<InfoContent>Empty</InfoContent>
							</BoxInfo>
						</Box>
					</Wrapper>
				</Top>
				<BottomList>
					{Array.from(new Array(5)).map((item, index) => (
						<BottomItemLink to='/'>Page {index + 1}</BottomItemLink>
					))}
				</BottomList>
			</Container>
		</NavContainer>
	)
}

export default NavbarBigSizeShow
