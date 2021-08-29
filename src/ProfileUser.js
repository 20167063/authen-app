import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";


export default function ProfileUser(){

  const [user,setUser] = useState({})
  useEffect(()=>{
    loadData();
  },[])

  var history = useHistory();
  const logoutBtn = () =>{
    localStorage.removeItem("accessToken")
    history.replace("/");
  }

  const loadData = async() => {
    let access_token = localStorage.getItem("accessToken");
    await axios.get('https://api-qlk.aecomapp.com/api/auth/me', 
    {
      headers: {
          'Authorization': `Bearer ${access_token}`
      }
      })
      .then((res) => {
      setUser(res.data.result)
      })
      .catch((error) => {
      console.error(error)
    })

  }
return (
  <div>
    <h1>LOGIN Success</h1>
    <h2>{user.fullname}</h2>
    <h3>{user.email}</h3>
    <h4>{user.phone}</h4>
    <button type='submittbutton' className='btn btn-warning submittbutton' onClick={logoutBtn}>
    LOGOUT
    </button>
  </div>

);
}