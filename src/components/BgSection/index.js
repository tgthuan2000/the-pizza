import PropTypes from 'prop-types';
import Logo from '../Logo';
import { ButtonPagination } from '../Button';
import { BgSectionContainer, HeaderContainer, HeaderTitle, LogoWrapper } from './BgSectionElements';

const BgSection = ({
	children,
	padding = '50px 0',
	onPaginateLeftClick,
	onPaginateRightClick,
	headerTitle,
	...props
}) => {
	return (
		<BgSectionContainer padding={padding} {...props}>
			<HeaderContainer>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<HeaderTitle>{headerTitle}</HeaderTitle>
			</HeaderContainer>
			{children}
			<ButtonPagination
				handleLeftClick={onPaginateLeftClick}
				handleRightClick={onPaginateRightClick}
			/>
		</BgSectionContainer>
	);
};

BgSection.propTypes = {
	beforeLine: PropTypes.string,
	beforeHeight: PropTypes.string,
	afterLine: PropTypes.string,
	afterHeight: PropTypes.string,
	bgImage: PropTypes.string,
	padding: PropTypes.string,
	headerTitle: PropTypes.string.isRequired,
	onPaginateLeftClick: PropTypes.func.isRequired,
	onPaginateRightClick: PropTypes.func.isRequired,
};

export default BgSection;
