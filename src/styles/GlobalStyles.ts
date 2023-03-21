import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.png'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-synthesis: none;
        font-size: 100%;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        min-height: 100vh;
        display: grid;
        place-content: center;
        background: url(${background}) center no-repeat;
        background-size: cover;
        backdrop-filter: blur(20px);
    }
`;

export default GlobalStyles;