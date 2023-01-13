import React from "react";
import "./Error.css";
import Card from "./Card";
const Error=(props)=>{

    return (
        <div className="bckground" onClick={props.onclickingok}>
            <Card className="errorcard">
            <header className="header">
              <h2>{props.title}</h2>
            </header>
            <hr class="border border-danger border-2 opacity-50"></hr>
            <div>
                <p className="para">{props.message}</p>
            </div>
            <div className="btn">
                <button className="btn btn-warning" onClick={props.onclickingok}>Okay</button>
            </div>
            </Card>
        </div>
    );
}

export default Error;