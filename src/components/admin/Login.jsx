import React from 'react'

export default function login() {
  return (
    
    <div class="page">
        <div class="title"><h1 class="title">Admin Login</h1></div>
            <div class="login">
                <div class="top">
                    <input type="text" class="cred" name="username" id="username" placeholder="Username"/>
                    <input type="text" class="cred" name="password" id="password" placeholder="Password"/>
                    <p class="recover_p">Recover Password</p>
                    <button class="login" >Login</button>
                    <p class="sign_in">Sign in</p>
                </div>
        </div>
    </div>
    
  )
}
