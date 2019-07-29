import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Kalam', cursive;
        background-color: rgb(20, 20, 20, 1);
        color: white;
        padding-top: 60px;
    }
`;

export default GlobalStyle;
