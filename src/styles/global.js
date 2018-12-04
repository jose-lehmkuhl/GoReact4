import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Rubik', sans-serif;

    }

    html, body, #root {
        height: 100%;
    }
`;

export default GlobalStyle;
