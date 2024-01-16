import { Button, TextField } from "@mui/material"
import React from "react"

const Login = () => {
return (
    <div className="App">
      <header className="App-header">
        <div className='App-login'>
          <div className='login-fields'>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" type='password' />
          </div>
          <div className=''>
            <Button variant="contained">Login</Button>
          </div>
        </div>
      </header>
    </div>
)
}
export default Login;