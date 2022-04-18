import React, {useRef} from 'react';
import * as service from '../services/auth-service'
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const {signup} = useProfile()
  const handleSignup = async () => {
    try {
      await signup(
        emailRef.current.value,
        passwordRef.current.value
      )
      navigate('/profile')
    } catch (e) {
      alert('oops')
    }
  }
  return (
    <div>
      <h1>Signup</h1>
      <input ref={emailRef} placeholder="email" className="form-control" type="email"/>
      <input ref={passwordRef} placeholder="password" className="form-control" type="password"/>
      <button onClick={handleSignup} className="btn btn-primary">
        Signup
      </button>
    </div>
  );
};

export default Signup;