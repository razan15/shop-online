import React from 'react';
import './Signin.css';
export default function Signin() {
    return (
        <div className="signin">
          <h1>Sign in</h1>
          <input placeholder="Enter email" type="text" /><br /><br />
          <input placeholder="Enter password" type="password" /><br /><br />
          <button type="submit" value="send" title="send">Sign in</button>  
        </div>
    )
}
