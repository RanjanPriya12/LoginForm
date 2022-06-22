import React from 'react';
import { useState } from 'react';
import validator from 'validator';

const Login = () => {
    const [userName,setUserName]=useState('');
    const [errMsg,setErrMsg]=useState('');

const isValidated=(value)=>{
    if(validator.isStrongPassword(value,
        {minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1})){
setErrMsg('Password is Strong');
console.log(value,userName);
return true;
        }
        else{
            setErrMsg('Please Enter a Strong Password');
        }
        
        
}
  


    const handleOnSubmit=(e)=>{
        e.preventDefault();

    }
  return (
    
    <div>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>User Name</label>
                <input type="text"  
                onChange={(e)=>setUserName(e.target.value)}
                 name="name" placeholder='Enter username...' />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(e)=>isValidated(e.target.value)} value="password" placeholder='Enter password...' />
                <span>{errMsg===''?null:<i style={{color:"red"}}>{errMsg}</i>}</span>
            </div>
            <div>
                <button type='submit' disabled={!isValidated()}>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login;