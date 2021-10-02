import { useEffect } from 'react';

const useResize = (callback, behavior = 'resize') => {
	useEffect(() => {
		callback();
		window.addEventListener(behavior, callback);
		return () => window.removeEventListener(behavior, callback);
	}, [callback, behavior]);
};
export default useResize;
