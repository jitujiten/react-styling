import React from 'react';

import './Button.css';



const Button = props => {
  const btnstyle=`button`+props.className
  return (
    <button type={props.type} className={btnstyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
