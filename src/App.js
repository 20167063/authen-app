import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import ProfileUser from './ProfileUser';
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';


export default function App(){
	return (
    <div className="container bg-white p-4 mt-5">
      <Router>
      <Switch>
        <Route path="/profile" render={()=>{
          return localStorage.getItem("accessToken") ? <ProfileUser /> : <Redirect to="/"/>
        }}>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
      </Router>
		</div>
	)
}


