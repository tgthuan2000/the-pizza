import { useEffect } from 'react';

const useTimeout = (callback, timeout) => {
	useEffect(() => {
		const setTime = setTimeout(callback, timeout);
		return () => clearTimeout(setTime);
	});
};
export default useTimeout;
