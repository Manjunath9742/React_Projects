import React, {useState} from 'react';
import './App.css';
import {Login} from './Login.jsx';
import {Register} from './Register.jsx';
function App() {
const [currentForm, setCurrentForm] = useState('login');

const toggleForm=(currentForm)=>{
  setCurrentForm(currentForm)
}
  return (

    <div className="App">
    {
       currentForm === "Login" ? <Login onFormSwitch={toggleForm}/>: <Register/>
    }
  
    </div>
    
  ); 
}

export default App;
