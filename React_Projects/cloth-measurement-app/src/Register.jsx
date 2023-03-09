import React, {useState} from 'react'

export const Register = (props) => {
 const [email, setEmail] = useState(" ");
 const [pass, setPass] = useState(" ");
//  const [name, setName] = useState(" ");

 const  handleSubmit=(e)=>{
            e.preventDefault();
            console.log(email)
    }
   return (
    <div className='auth-form-container'>
    <form className="register-form" onSubmit={handleSubmit}>
    <label for="email" >Email</label>
        <input  value={email}   onChange={(e)=>setEmail(e.target.value)}        type="email" placeholder='youremail@gmail.com' id='email'></input> 
        <label for="password">Password</label>
        <input  value={pass}  onChange={(e)=>setPass(e.target.value)}    type="password" placeholder="**********" name="password"></input>
        <button >Login</button>
    </form>
    <button onClick={()=>props.onFormSwitch('Login') }>Already have an account?Login here.</button>
    </div>
  );
}


