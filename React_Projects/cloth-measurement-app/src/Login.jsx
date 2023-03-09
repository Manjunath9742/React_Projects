
import React, {useState} from 'react';

 export const Login = (props) => {
    const [email, setEmail] = useState(" ");
    const [password, setPass] = useState(" ");

    const  handleSubmit=(e)=>{
            e.preventDefault();
            console.log(email)
    }
  return (
    <div className='auth-form-container'>
    <form onSubmit={handleSubmit}>
    <label for="email" >Email</label>
        <input  value={email}   onChange={(e)=>setEmail(e.target.value)}        type="email" placeholder='youremail@gmail.com' id='email'></input> 
        <label for="password">Password</label>
        <input  value={password}  onChange={(e)=>setPass(e.target.value)}    type="password" placeholder="**********" name="password"></input>
        <button >Login</button>
    </form>
    <button onClick={()=>props.onFormSwitch('Register')}>Don't have an account?Register here.</button>
    </div>
  );
}

