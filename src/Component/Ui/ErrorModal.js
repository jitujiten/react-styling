import React,{Fragment} from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css";
import ReactDom from "react-dom";

const Backdrop=props=>{
  return <div className={classes.backdrop} onClick={props.onclickbtn}></div>
}

const ModalOverlay=props=>{
  return <Card className={classes.modal}>
  <header className={classes.header}>
      <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
      <p>{props.message}</p>
  </div>
  <footer className={classes.actions}>
     <Button onClick={props.onclickbtn}>Okay</Button>
  </footer>
</Card>
}


const ErrorModal=(props)=>{
  return  <React.Fragment>
    {ReactDom.createPortal(<Backdrop onclickbtn={props.onclickbtn} />,document.getElementById("backdrop-root"))}
    {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onclickbtn={props.onclickbtn}  />,document.getElementById("overlay-root"))}
  </React.Fragment>
}

export default ErrorModal;