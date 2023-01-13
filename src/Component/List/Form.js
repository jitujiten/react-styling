import React,{ useState } from "react";
import Card from "../Ui/Card";
import Error from "../Ui/Error";

const Form=(props)=>{

const[usernamevalue,setusername]=useState("");
const[agevalue,setage]=useState("");
const [error,seterror]=useState();

const submitingdata=(event)=>{
    event.preventDefault();

    if(usernamevalue.trim().length===0 ||agevalue.trim().length===0){
        seterror({title:"Please enter valid input",message:"please enter valid name or age"});
        return;
    }
    if(+agevalue<1){
        seterror({title:"Please enter valid age",message:"please enter valid age (age>0)"})
        return;
    }
    props.onadding(usernamevalue,agevalue);
    setusername("");
    setage("");
}


const usernameHandler=(event)=>{
    setusername(event.target.value);
}


const ageHandler=(event)=>{
    setage(event.target.value);
}
  
const removerHandler=()=>{
    seterror(null); 
}


    return (     <div className="container">
                {error && <Error  title={error.title} message={error.message} onclickingok={removerHandler}/>} 
                <Card>
                  <form onSubmit={submitingdata}>
                  <label  className="form-label">Username:</label>
                  <input type="text" className="form-control" value={usernamevalue} onChange={usernameHandler}/>
                  <label  className="form-label">Age:</label>
                  <input type="number" className="form-control" value={agevalue} onChange={ageHandler}/>
                  <br></br>
                  <button type="submit" id="sbt" className="btn btn-primary">Submit</button>
                  </form>
                  </Card>
                  </div>
    );

}

export default Form;