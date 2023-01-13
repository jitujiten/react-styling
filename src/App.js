import React,{ useState} from 'react';
import Form from './Component/List/Form';
import "./App.css"
import Display from './Component/List/Display';

const App = () => {
  const [enterdata,setdata]=useState([]);

  const addingHandler=(lname,lage)=>{
    setdata((prvvalue)=>{
      return [...prvvalue,{name:lname,age:lage,id:Math.random().toString}]
  })
  }

  return (
   <div className='container'>
   <Form onadding={addingHandler}/>
   <Display users={enterdata}/>
   </div>
     
  );
};

export default App;
