import styled from 'styled-components';
import { searchShow } from '../../../animation';

export const SearchInputForm = styled.form`
	display: flex;
	align-items: center;
	border-radius: 15px;
	border: 2px solid #e5e5e5;
	padding: 10px;
	padding-left: 15px;

	background-color: white;
	animation: ${searchShow} ease 0.5s forwards;
`;

export const Input = styled.input`
	width: 0;
	flex: 1;
	outline: none;
	border: none;
`;
