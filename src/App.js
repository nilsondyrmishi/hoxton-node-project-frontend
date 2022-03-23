import './App.css';
import {useEffect, useState} from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  const [users, setUsers] = useState(null)

 function getUserFromServer(){
    fetch("http://localhost:4000/users")
        .then(resp=>resp.json())
        .then(userFromServer=>setUsers(userFromServer))
  }


  useEffect(getUserFromServer,[])
  console.log(users)
  return (
    <div className="App">
    <SignIn/>
        <SignUp/>
    </div>
  );
}

export default App;
