import React, { useState,useRef } from "react";
import classes from "./Adduser.module.css";
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";

const Adduser = (props) => {
  const nameinputref=useRef();
  const ageinputref=useRef();
  const collegenameinputref=useRef();

  const [error,seterror]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const inputname=(nameinputref.current.value);
    const inputage=(ageinputref.current.value);
    const inputcollegename=(collegenameinputref.current.value);

    if(inputname.trim().length===0 ||inputage.trim().length===0||inputcollegename.trim().length===0 ){
      seterror({title:"Invalid input data",message:"Please entered valid username or age or collegename"});
      return;
    }
    if(+inputage<1){
      seterror({title:"Invalid input age",message:"Please entered age (age>0)"})
      return;
    }
    props.onAdduser(inputname, inputage,inputcollegename );

    
  nameinputref.current.value="";
  ageinputref.current.value="";
  collegenameinputref.current.value="";
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
          ref={nameinputref}
        />
         <label htmlFor="collegename">collegename</label>
        <input
          id="collegename"
          type="text"
          ref={collegenameinputref}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageinputref}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </div>
  );
};

export default Adduser;
