import styled from "styled-components";
import GlobalStyle from "./components/globalStyles";
import HeroPage from "./pages/hero";
import React from "react";
import { Routes, Route } from "react-router-dom";
import QuizPage from "./pages/quiz";
export default function App() {

  const [formData, setFormData] = React.useState({
    amountQuestions: "5",
    difficulty: "easy",
    category: "",
  });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <>
      <GlobalStyle />
      <StyledContainer className="container">
        <Routes> 
          <Route path="/" element={<HeroPage handleChange={handleChange} formData={formData} />} />
          <Route path="/quiz" element={<QuizPage formData={formData} />} />

        </Routes>
       
      </StyledContainer>
    </>
  );
}


const StyledContainer = styled.div`
  
`