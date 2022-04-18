import React, {useEffect, useState} from 'react';
import * as service from "../services/auth-service"
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";


const Profile = () => {
  // const [profile, setProfile] = useState()
  const {profile} = useProfile()
  const navigate = useNavigate()

  const logout = async () => {
    await service.logout()
    navigate('/signin')
  }
  useEffect(() => {
    // getProfile()
  }, [])
  return (
    <div>
      <h1>Profile</h1>
      <button className="btn btn-danger"
            onClick={logout}>Logout</button>
      <hr/>
      {profile && profile.email}
    </div>
  );
};

export default Profile;