import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        /* background-color: #26262C; */
        background-color: rgba(0, 0, 0, 0.8);
        font-family: 'RickAndMortyFont',sans-serif;
        font-size: 1.6rem;
       
    }

    a {
        text-decoration: none;
    }
`;

export { GlobalStyle };
