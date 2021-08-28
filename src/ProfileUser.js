import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ProfileUser(){
    const [user,setUser] = useState({})
    useEffect(()=>{
		loadData();
	},[localStorage.getItem("accessToken")])

    var history = useHistory();
    const logoutBtn = () =>{
		localStorage.removeItem("accessToken")
		history.replace("/");
	}

	const loadData = () => {
		var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://api-qlk.aecomapp.com/api/auth/me", requestOptions)
        .then(response => response.json())
        .then(result => setUser(result))
        .catch(error => console.log('error', error));
	}
    return (
     
			<div>
			<h1>LOGIN {user.message}</h1>
            <h2>{user.result?.fullname}</h2>
            <h3>{user.result?.email}</h3>
            <h4>{user.result?.phone}</h4>
			<button type='submittbutton' className='btn btn-warning submittbutton' onClick={logoutBtn}>
			LOGOUT
			</button>
			</div>
       
    );
}