import React, {useRef} from 'react';
import * as service from '../services/auth-service'
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const Signin = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const {signin} = useProfile()
  const handleSignin = async () => {
    try {
      await signin(
        emailRef.current.value,
        passwordRef.current.value
      )
      navigate("/profile")
    } catch (e) {
      alert('oops')
    }
  }
  return (
    <div>
      <h1>Signin</h1>
      <input ref={emailRef} placeholder="email" className="form-control" type="email"/>
      <input ref={passwordRef} placeholder="password" className="form-control" type="password"/>
      <button onClick={handleSignin} className="btn btn-primary">
        Signin
      </button>
    </div>
  );
};

export default Signin;