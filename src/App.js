import React,{useState} from 'react';
import Adduser from './Component/Users/Adduser';
import UserList from './Component/Users/UserList';
import Wrapper from './Component/Helpers/Wrapper';
const App = () => {

  const [Userslist,setUserlist]=useState([]);

  const onAdduserHandler=(eusername,eage,ecollege)=>{
    setUserlist((prevuser)=>{
      return [...prevuser,{name:eusername,age:eage,collegename:ecollege,id:Math.random().toString}]
    }) 
  }

  return (
    <Wrapper>
     <Adduser onAdduser={onAdduserHandler}/>
     <UserList users={Userslist}/>
     </Wrapper>  
  );
};

export default App;
