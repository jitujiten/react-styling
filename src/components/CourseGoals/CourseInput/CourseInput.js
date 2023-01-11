import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../../UI/Button/Button";
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [prvstate, setstate] = useState(true);
  const [btnstate,setbtnstate]=useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setstate(true);
    }
    if (event.target.value.trim().length > 0) {
      setbtnstate(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length == 0) {
      setstate(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!prvstate ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <button className={`${!btnstate ?"btn":"button"}`} type="submit">
        Add Goal
      </button>
    </form>
  );
};

export default CourseInput;
