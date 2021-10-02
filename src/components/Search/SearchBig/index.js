import { SearchOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { SearchBigContainer } from './SearchBigElements';

const SearchBig = () => {
	return (
		<SearchBigContainer>
			<SvgIcon component={SearchOutlined} />
		</SearchBigContainer>
	);
};

export default SearchBig;
