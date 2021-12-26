import Cookiestandadmin from "../components/cookieStandAdmin";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";

const Home = () => {
  const {user} = useAuth()
  return user ? <Cookiestandadmin /> : <LoginForm/>
};

export default Home;


