import LazyLoad from 'react-lazyload';
import Container from '../Container';
import Logo from '../Logo';
import {
	CopyRightContainer,
	IconItem,
	IconList,
	InfoContainer,
	InfoTitle,
	InfoWarpper,
	LinkOfferImg,
	OfferImg,
	PoweredBy,
	WrapperCopyRight,
	WrapperOfferImg,
} from './FooterElements';
import { footer } from '../../helpers/images';
import { Facebook, MailOutlined } from '@mui/icons-material';

const Footer = () => {
	return (
		<LazyLoad height={500} offset={100} placeholder={<div>Loadding...</div>} once>
			<Container margin='30px auto'>
				<Logo center />
				<WrapperOfferImg>
					<LinkOfferImg to='/'>
						<OfferImg src={footer.banner} />
					</LinkOfferImg>
				</WrapperOfferImg>
			</Container>
			<Container margin='40px auto'>
				<InfoContainer>
					<InfoWarpper>
						<InfoTitle>My Account</InfoTitle>
					</InfoWarpper>
					<InfoWarpper></InfoWarpper>
					<InfoWarpper>
						<InfoTitle>Send Mail</InfoTitle>
					</InfoWarpper>
				</InfoContainer>
			</Container>
			<CopyRightContainer>
				<Container>
					<WrapperCopyRight>
						<IconList>
							<IconItem to='/'>
								<Facebook />
							</IconItem>
							<IconItem to='/'>
								<MailOutlined />
							</IconItem>
						</IconList>
						<PoweredBy>Powered By tgthuan © 2021</PoweredBy>
					</WrapperCopyRight>
				</Container>
			</CopyRightContainer>
		</LazyLoad>
	);
};

export default Footer;
