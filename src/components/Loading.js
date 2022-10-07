import styled from "styled-components";
import React from "react";

export default function LoadingIndicator() {
  return (
    <StyledContainer className="container">
      <h1 className="loading-text"> Setting up your game!</h1>
      <div className="lds-hourglass"></div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  
  min-height: 100vh;
  .loading-text {
    color: #ccd5ae;
    font-family: "Bungee Shade", cursive;
    font-size: 5rem;
    text-align: center;
  }
  .lds-hourglass {
  display: grid;
  place-content: center;
  position: relative;
  width: 200px;
  height: 200px;
  
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 60px solid #d4a373;
  border-color: #d4a373 transparent #d4a373 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

  background-color: #fefae0;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23d4a373' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;
