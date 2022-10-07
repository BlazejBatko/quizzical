import styled from "styled-components";
import React, { useEffect } from "react";

export default function Question(props) {
  const [answersArray, setAnswerArray] = React.useState(props.answersArray);

    //function that decodes html so text like Pok&eacute;mon is rendered as Pokemon instead
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
   // creating element that includes all question cards
  const answerElements = answersArray.map((answer) => (
    <StyledQuestion key={answer + props.question}>
      <div className="button">
        <input
          id={answer + props.question}
          type="radio"
          name={props.question}
          value={answer === props.correctAnswer ? true : false}
          onChange={props.handleAnswerChange}
        />
       
        <label
        // when answer is submitted, add outline-correct className so we can mark correct answers
          className={
            props.answersSubmitted && answer === props.correctAnswer
              ? "outline-correct"
              : ""
          }
          htmlFor={answer + props.question}
        >
         
          {decodeHtml(answer)}
        </label>
      </div>
    </StyledQuestion>
  ));

  return (
    <StyledQuestionCard>
      <StyledQuestion>
        <legend>{decodeHtml(props.question)}</legend>
        <div className="answers">
          {answerElements}
          
        </div>
      </StyledQuestion>
    </StyledQuestionCard>
  );
}

const StyledQuestionCard = styled.div`
  background: #faedcd;
  padding: 5em;
  box-shadow: -10px 10px #d4a373;
  width: 90%;
  margin-bottom: 7em;
  display: flex;
  flex-direction: column;



  .answers {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    font-weight: bold;
    gap: 50px;
  }
  .answers > fieldset {
    width: 20%
  }
  @media (max-width: 768px) {
    .answers {
        display: flex;
        gap: 25px;
    }
  }
`;
const StyledQuestion = styled.fieldset`
  border: none;
  display: flex;
  

  legend {
    font-weight: 700;
    font-size: 2.5rem;
    max-width: 1200px;
    margin: 1em 0;
    text-shadow: -2px 2px 3px #d4a373;
  }

  .button {
    position: relative;
    color: white;
    height: 10em;
    width: fit-content;
    min-width: 10em;
    z-index: 0;
    
  }

  .button label,
  .button input {
    background: #d4a373;
    color: black;
    cursor: pointer;
    
    position: absolute;
    font-size: 1.5rem;
    border: 1px solid black;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    
  }

  
  .button input[type="radio"] {
    opacity: 0.001;
    z-index: 100;
    
  }
  .button input[type="radio"]:checked + label {
    background-color: #ccd5ae;
    transform: translate(-5px, 5px);
    box-shadow: 0px 0px black;
  }
  .button label {
    cursor: pointer;
    z-index: 90;
    
    min-height: 7em;
    height: fit-content;
    min-width: 7em;
    padding: 1em;
    
    
    box-shadow: -10px 10px black;
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
    .button label {
        font-size: 2rem;
        min-height: 5em;
        height: fit-content;
        min-width: 6em;
        padding: 0;
       
    }
    .button {
        height: 10em;
    }
  }

`;
