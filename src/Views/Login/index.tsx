import { Button, TextField } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { LISTINGPAGE } from "../../Constants/Routes.tsx";

const Login = () => {
  const Navigate = useNavigate();
  const loginAttempt = () => {
    console.log("login")
    Navigate(LISTINGPAGE);
    console.log("loginnnnn")

  }
  return (
      <div className="App">
        <header className="App-header">
          <div className='App-login'>
            <div className='login-fields'>
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField id="standard-basic" label="Password" variant="standard" type='password' />
            </div>
            <div className=''>
              <Button variant="contained" 
              onClick={() => {loginAttempt()}}
              >Login</Button>
            </div>
          </div>
        </header>
      </div>
  )
}
export default Login;