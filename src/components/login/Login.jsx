
import React from 'react'
import firebase from 'firebase/app'
import {auth} from '../../firebase/Config'
import './login.css'
import login from '../../assets/login.svg'
function Login() {

    function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
      <section className="login">
        <section className="">
          <img src={login} />
        </section>
        <section className="login-container">
        <span>Welcome, Please login to add reviews</span>
        <button onClick={signIn}>Login</button>
        </section>
      </section>            
    )
}

export default Login
