import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        color: #666;
        position: relative;
        font-family: 'Philosopher', sans-serif;
        letter-spacing: 1px;
        font-size: 14px;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h5{
        font-family: 'Mitr', sans-serif;
        font-weight: normal;
        color: black;
    }
`;
export default GlobalStyles;
