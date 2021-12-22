import { useState } from "react";
import Cookiestandadmin from "./cookieStandAdmin";
import LoginForm from "./LoginForm";
import axios from "axios";
const baseUrl ='https://backend-drf.herokuapp.com/';
const tokenUrl = baseUrl+'api/token/';
const Home = () => {

const [token, setToken] = useState('');

const login = async (username, password)=> {
  const response = await axios.post(tokenUrl, { username, password });
  setToken(response.data.access)
}

  return (
    <>
    {(!token) ? <LoginForm login={login}/>:   <Cookiestandadmin token ={token}/> }
  
    </>
  );
};

export default Home;
