import Cookiestandadmin from "./cookieStandAdmin";
import LoginForm from "./LoginForm";
import { useAuth } from "../contexts/auth";

const Home = () => {
  const {user} = useAuth()
  return user ? <Cookiestandadmin /> : <LoginForm/>
};

export default Home;


