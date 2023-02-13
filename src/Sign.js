
import * as React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';


export default function Sign() {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")


  

  return (
        <div className="form-registration">
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text" value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)}/>
            <label >Password</label>
            <input type="text" value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)}/>
            <button >Register</button>
        </div>
        <div className="login">
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username ..."/>
                <input type="text" placeholder="Password..."/>
                <button>Login</button>
            </div>
        </div>
        </div> 
  );
}