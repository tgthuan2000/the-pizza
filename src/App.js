import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import loading from './assets/loader.gif';
import GlobalStyles from './globalStyles';

const App = () => {
	const HomePage = lazy(() => import('./pages/Home'));
	return (
		<Suspense fallback={<Loading />}>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route path='/' exact component={HomePage} />
				</Switch>
			</Router>
		</Suspense>
	);
};

const LoadingWrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
`;
const LoadingImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Loading = () => (
	<LoadingWrapper>
		<LoadingImg src={loading} />
	</LoadingWrapper>
);

export default App;
