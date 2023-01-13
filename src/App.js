import React,{useState} from 'react';
import Adduser from './Component/Users/Adduser';
import UserList from './Component/Users/UserList';
const App = () => {

  const [Userslist,setUserlist]=useState([]);

  const onAdduserHandler=(eusername,eage)=>{
    setUserlist((prevuser)=>{
      return [...prevuser,{name:eusername,age:eage,id:Math.random().toString}]
    }) 
  }

  return (
    <div>
     <Adduser onAdduser={onAdduserHandler}/>
     <UserList users={Userslist}/>
     </div>  
  );
};

export default App;
