import React from "react";
import styled from "styled-components";
export default function Form({formData, handleChange}) {

  return (
    <form>
      <StyledFieldset>
        <legend> Amount of questions: </legend>
        <div className="button btn">
          <input
          // if certain input is checked, formData field is set to corresponding value
            name="amountQuestions"
            checked={formData.amountQuestions === "50"}
            value={50}
            onChange={handleChange}
            id={50}
            type="radio"
          />
          <label htmlFor={50}>50</label>
        </div>
        <div className="button btn">
          <input
            name="amountQuestions"
            checked={formData.amountQuestions === "30"}
            onChange={handleChange}
            id={30}
            value={30}
            type="radio"
          />
          <label htmlFor={30}>30</label>
        </div>
        <div className="button btn">
          <input
            name="amountQuestions"
            checked={formData.amountQuestions === "15"}
            onChange={handleChange}
            id={15}
            value={15}
            type="radio"
          />
          <label htmlFor={15}>15</label>
        </div>
        <div className="button btn">
          <input
            name="amountQuestions"
            checked={formData.amountQuestions === "10"}
            onChange={handleChange}
            id={10}
            value={10}
            type="radio"
          />
          <label htmlFor={10}>10</label>
        </div>
        <div className="button btn">
          <input
            name="amountQuestions"
            value={5}
            checked={formData.amountQuestions === "5"}
            onChange={handleChange}
            id={5}
            type="radio"
          />
          <label htmlFor={5}>5</label>
        </div>
      </StyledFieldset>

      <StyledFieldset>
        <legend> Select Difficulty:</legend>
        <div className="button btn wider">
          <input
            name="difficulty"
            value="hard"
            checked={formData.difficulty === "hard"}
            onChange={handleChange}
            id={"hard"}
            type="radio"
          />
          <label htmlFor={"hard"}>hard</label>
        </div>
        <div className="button btn  wider">
          <input
            name="difficulty"
            value="medium"
            checked={formData.difficulty === "medium"}
            onChange={handleChange}
            id={"medium"}
            type="radio"
          />
          <label htmlFor={"medium"}>medium</label>
        </div>
        <div className="button btn wider">
          <input
            name="difficulty"
            value="easy"
            checked={formData.difficulty === "easy"}
            onChange={handleChange}
            id={"easy"}
            type="radio"
          />
          <label htmlFor={"easy"}>easy</label>
        </div>
      </StyledFieldset>
      <StyledFieldset>
        <legend>Questions category:</legend>
        <select id="category" name="category" size="1" value={formData.category} onChange={handleChange}>
          <option style={{ background: "#ccd5ae" }} value={"Any"}>
            Any
          </option>
          <option style={{ background: "#dbe1bc" }} value={"27"}>
            Animals
          </option>
          <option style={{ background: "#e9edc9" }} value={"9"}>
            General Knowledge
          </option>
          <option style={{ background: "#f4f4d5" }} value={"15"}>
            Video Games
          </option>
          <option style={{ background: "#fefae0" }} value={"11"}>
            Movies
          </option>
          <option style={{ background: "#fcf4d7" }} value={"21"}>
            Sports
          </option>
          <option style={{ background: "#fcf4d7" }} value={"22"}>
            Geography
          </option>
          <option style={{ background: "#faedcd" }} value={"23"}>
            History
          </option>
        </select>
      </StyledFieldset>
    </form>
  );
}

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 5rem;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  select {
    width: 100%;
    padding: 0.3em 1em;
    color: black;
    font-size: 3rem;
    box-shadow: -10px 10px black;
    background: #ccd5ae;
  }
  select option {
    color: black;
  }
  legend {
    font-family: "Bungee Shade", cursive;
    font-size: 3rem;
  }

  .button {
    height: 100px !important;
    width: 100px !important;
    position: relative;
    cursor: pointer;
  }

  .wider {
    height: 100px !important;
    width: 200px !important;
  }

  .button label,
  .button input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button input[type="radio"] {
    opacity: 0.001;
    z-index: 100;
    cursor: pointer;
  }
  .button input[type="radio"]:checked + label {
    background-color: #ccd5ae;
  }
  .button label {
    cursor: pointer;
    z-index: 90;
    line-height: 2em;
  }
`;
