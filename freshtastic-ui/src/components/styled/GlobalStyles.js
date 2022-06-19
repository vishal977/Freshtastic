import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`   
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');
    html, body {
        background: ${ ({theme}) => theme.background };
        font-size: 1.15em;
        color: ${ ({theme}) => theme.font };
        font-family: 'Lato', sans-serif;
        margin: 0 0;
        overflow-x: hidden;
        justify-content : center;
    }
`