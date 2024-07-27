import React from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState} from "react";
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/landing';
import ReactDOM from 'react-dom'
import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from './components/TodoContainer';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App ()
{
  const [users, setusers] = useState([{
    username: "Priya",
    password: "123"
},
{
  username:"abc",
  password:"123"
}])
  return(
<div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path='/signup' element={<Signup  users={users} setusers={setusers}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>
  </div>)
}
root.render(<App/>)
export default App
  
