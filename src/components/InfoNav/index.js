import { ExpandMoreOutlined, Loyalty, PersonOutlined } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import { useEffect, useState } from 'react'
import Container from '../Container'
import { InfoNavContainer, ItemName, Left, RightItem, RightList, Wrapper } from './InfoNavElements'

const InfoNav = () => {
	const [show, setShow] = useState(true)

	// useResize(() => {
	// 	const size = window.innerWidth;
	// 	if (size <= 960) return setShow(false);
	// 	return setShow(true);
	// });

	useEffect(() => {
		const a = () => {
			const size = window.innerWidth
			if (size <= 960) return setShow(false)
			return setShow(true)
		}
		a()
		window.addEventListener('resize', a)
		return () => window.removeEventListener('resize', a)
	}, [])

	return (
		<InfoNavContainer>
			<Container>
				<Wrapper>
					<Left>
						<Loyalty />
						<p>Welcome to The Pizza</p>
					</Left>
					{show && (
						<RightList>
							<RightItem>
								<SvgIcon fontSize='medium' component={PersonOutlined} />
								<ItemName>Account</ItemName>
								<SvgIcon fontSize='small' component={ExpandMoreOutlined} />
							</RightItem>
						</RightList>
					)}
				</Wrapper>
			</Container>
		</InfoNavContainer>
	)
}

export default InfoNav
