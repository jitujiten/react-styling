import React from "react";
import Card from "../Ui/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} / {user.collegename} ({user.age} Years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
