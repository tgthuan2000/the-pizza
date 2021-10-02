import { forwardRef } from 'react';
import { Input, SearchInputForm } from './SearchInputElements';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { SvgIcon } from '@mui/material';

const SearchInput = forwardRef(({ placeholder, button, onSubmit }, ref) => {
	useEffect(() => {
		const setTime = setTimeout(() => {
			ref.current.focus();
		}, 1000);
		return () => clearTimeout(setTime);
	}, [ref]);
	return (
		<SearchInputForm onSubmit={onSubmit}>
			<Input placeholder={placeholder} ref={ref} />
			<SvgIcon component={button} style={{ marginLeft: '20px', cursor: 'pointer' }} />
		</SearchInputForm>
	);
});

SearchInput.propTypes = {
	placeholder: PropTypes.string,
	onSubmit: PropTypes.func,
	button: PropTypes.object,
};

export default SearchInput;
