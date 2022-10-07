import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }

    body{
        font-family: 'Nunito', sans-serif;
    }
    html{
        scroll-behavior: smooth;
    }

    .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.red{
  outline: 5px solid #606c38;
  
}

*::-webkit-scrollbar {
  width: 0px;
}
*::-webkit-scrollbar-track {
  background: #252525;
}
*::-webkit-scrollbar-thumb {
  background-color: rgb(235, 215, 41);
  border-radius: 20px;
  border: transparent;
}

html {
  @media (max-width: 1000px) {
    font-size: 80%
  }
  @media (max-width: 768px) {
    font-size: 50%
  }
}

    
`;
export default GlobalStyle;
