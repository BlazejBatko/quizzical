import React from "react";
import Question from "../components/question";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingIndicator from "../components/Loading";

export default function QuizPage({ formData }) {
  const { amountQuestions, category, difficulty } = formData;
  const formEl = document.getElementById("questionsForm");
  const [data, setData] = React.useState({});

  const [answersState, setAnswersState] = React.useState({});
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [answersSubmitted, setAnswersSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (answersSubmitted) {
      const anchor = document.querySelector("#newGame");
      anchor.scrollIntoView({ block: "center" });
    }
  }, [answersSubmitted]);

  React.useEffect( () => {
    window.onscroll = function () {
      if(document.getElementById("myBar")) {
        scrollIndicator();
      }
      
    };
  },[])
 
  function scrollIndicator() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    let i = 0;
    for (const [key, value] of Object.entries(answersState)) {
      
      if (value === "true") {
        i++
      }
    }

    formEl.style.pointerEvents = "none";
    setCorrectAnswers(i);
    setAnswersSubmitted((prev) => !prev);
  
  }

  function handleAnswerChange(e) {
    setAnswersState((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  }

  function fetchData() {
    fetch(
      `https://opentdb.com/api.php?amount=${amountQuestions}&difficulty=${difficulty}&type=multiple&category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }

  function startNewGame() {
   
    
    setAnswersState({})
    setData([]);
    setAnswersSubmitted(false);
    formEl.style.pointerEvents = "auto";
    window.scrollTo(0, 0);
   fetchData()
  }

  React.useEffect(() => {
    fetchData()
  }, []);

  let questionElemenents;

  if (data.length > 0) {
    questionElemenents = data.map((question) => {
      let answersArray = [
        question.correct_answer,
        ...question.incorrect_answers,
      ];
      answersArray.sort(() => Math.random() - 0.5);
      return (
        <Question
          key={question.question}
          question={question.question} //id
          handleAnswerChange={handleAnswerChange}
          answersArray={answersArray}
          correctAnswer={question.correct_answer}
          incorrectAnswer={question.incorrect_answers}
          answersSubmitted={answersSubmitted}
        />
      );
    });
  }

  return (
    <>
     
      {data.length ? (
        <>
          <StyledHeader className="header">
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>
          </StyledHeader>
          <Link to="/">
            <StyledGoBackBtn>x</StyledGoBackBtn>
          </Link>
          <StyledContainer>
            <h1 className="noselect">Good Luck!</h1>
            <form id="questionsForm">{questionElemenents}</form>
            {answersSubmitted ? (
              <>
                <h1 className="score">
                  {" "}
                  You answered <span> {correctAnswers} </span> question{correctAnswers === 1? "" : "s"} correctly{" "}
                </h1>
                <button
                  className="new-game button-end"
                  id="newGame"
                  onClick={startNewGame}
                >
                  {" "}
                  NEW GAME
                </button>
              </>
            ) : (
              <button className="submit-form button-end" onClick={handleSubmit}>
                Submit!
              </button>
            )}
          </StyledContainer>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #f1f1f1;

  .progress-container {
    width: 100%;
    height: 8px;
    position: relative;
    z-index: 10;
    background: #d4a373;
  }

  /* The progress bar (scroll indicator) */
  .progress-bar {
    height: 15px;
    background: #ccd5ae;
    width: 0%;
    z-index: 10;
    position: relative;
  }
`;
const StyledGoBackBtn = styled.button`
  position: fixed;
  z-index: 10;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background: #d4a373;
  cursor: pointer;
`;

const StyledContainer = styled.div`
  .score {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2em;
  }
  .score span {
    font-size: 5rem;
    display: block;
  }
  .button-end {
    font-family: "Bungee Shade", cursive;
    font-size: 2rem;
    padding: 0.25em 1em;
    border: 2px solid black;
    box-shadow: -10px 10px black;
    font-family: "Bungee Shade", cursive;
    font-size: 2rem;
    padding: 0.25em 1em;
    border: 2px solid black;
    box-shadow: -10px 10px black;
    margin-bottom: 50px;
  }

  .submit-form {
    background: #ccd5ae;
    color: black;
    text-shadow: 5px 0px 10px white;
  }
  .new-game {
    background: #d4a373;
    color: white;
    text-shadow: 5px 0px 10px black;
  }
  h1 {
    font-family: "Bungee Shade", cursive;
    font-size: 5rem;
  }
  #questionsForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fefae0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d4a373' fill-opacity='0.89'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;
