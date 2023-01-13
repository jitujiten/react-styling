import React from "react";
import Card from "../Ui/Card";

const Display=(props)=>{

   return <Card>
         <ul className="list-group">
            {props.users.map(user=>(
                <li className="list-group-item list-group-item-danger" key={user.id}>{user.name} is {user.age} years old</li>
            ))}
         </ul>
   </Card>

}

export default Display;