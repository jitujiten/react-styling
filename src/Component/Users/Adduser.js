import React, { useState } from "react";
import classes from "./Adduser.module.css";
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";

const Adduser = (props) => {
  const [enteredUserName, setEnteredusername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,seterror]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length===0 ||enteredAge.trim().length===0){
      seterror({title:"Invalid input data",message:"Please entered valid username or age"});
      return;
    }
    if(+enteredAge<1){
      seterror({title:"Invalid input age",message:"Please entered age (age>0)"})
      return;
    }
    props.onAdduser(enteredUserName, enteredAge);
    setEnteredusername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredusername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
 
  const errorremover = (event) => {
    seterror(null);
  };

  return (
    <div>
   {error &&<ErrorModal title={error.title} message={error.message} onclickbtn={errorremover}/>} 
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={AgeChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </div>
  );
};

export default Adduser;
