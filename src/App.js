
import React, { useState } from "react";
import validator from 'validator'

const App = () => {
const [userName,setUserName]=useState('');
const [errorMessage, setErrorMessage] = useState('')

const validate = (value) => {

	if (validator.isStrongPassword(value, {
	minLength: 8})){
    setErrorMessage('Password length should be of atleast 8 characters');
  }
  if (validator.isStrongPassword(value, {
    minUppercase: 1})){
      setErrorMessage('Password should have Atleast one Uppercase character');
    }
    if (validator.isStrongPassword(value, {
      minNumbers: 1})){
        setErrorMessage('Password should have Atleast one Number');
      }
      if (validator.isStrongPassword(value, {
        minLowercase: 1})){
          setErrorMessage('Password should have Atleast one Lowercase Character');
        }
        if (validator.isStrongPassword(value, {
          minSymbols: 1})){
            setErrorMessage('Password should have Atleast one special character');
          }
if(validator.isStrongPassword(value, {
	minLength: 8,minUppercase: 1,minNumbers: 1,minLowercase: 1,minSymbols: 1})){
	setErrorMessage('Password is strong')
  return true;
	} else {
	setErrorMessage('Is Not Strong Password')
  return false;
	}
}

return (
	<div style={{
	marginLeft: '200px',
	}}>
	<pre>
  <div>
                    <label>User Name : </label>
                    <input type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        name="name" placeholder='Enter username...' />
                </div>
                <div>
                <label>Enter Password: </label>
    <input type="text"
    placeholder="Enter your password..."
		onChange={(e) => validate(e.target.value)}></input> <br />
		{errorMessage === '' ? null :
		<i style={{
		fontWeight: 'bold',
		color: 'red',
		}}>{errorMessage}</i>}
                </div>
                <div>
                  <button 
                  >Login</button>
                </div>
		
	</pre>
	</div>
);
}

export default App

