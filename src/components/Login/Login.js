import React,{useState} from "react";
import { useForm } from "react-hook-form";
import './login.css'
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const  responseGoogle = (response) => {
    setProfile(response.profileObj);
  }
  const [profile,setProfile] = useState();

  var history = useHistory();

  const onSubmit = async(data) =>{
    try{
      const params = data;
      const response = await axios.post("https://api-qlk.aecomapp.com/api/auth/login",params)
      localStorage.setItem("accessToken",response.data.result.access_token)
      history.replace("/profile")
    } catch(error){
      console.log(error)
      alert("Username or password wrong!!!")
    }
  }
  return (
  <div>
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="loginpage">LOGIN</h1>
        <h4>Phone number:</h4>
        <input defaultValue="" {...register("email",{ required: true })} />
        {errors.email && <span>This field is required</span>}
        <h4>password:</h4>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
  </div>

  <div>
    <h3>or login with</h3>
    <GoogleLogin
    clientId="848301233335-bkj0k1tjpovhblr6k35o1vif3epi0f7b.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
  </div>

  {profile? (<h1>{profile.name} --- <h2>{profile.email}</h2></h1>) : <div/>}
  </div>
  );
}