import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + "/api/token/";

const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot the authprovider");
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
    addRow,
    resetNewRow,
    newRow: false,
  });

  async function login(username, password) {
    const response = await axios.post(tokenUrl, { username, password });

    const decodedAccess = jwt.decode(response.data.access);

    const newState = {
      tokens: response.data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };

    setState((prevState) => ({ ...prevState, ...newState }));
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  function addRow() {
    const newState = {
      newRow: true,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }
  function resetNewRow() {
    const newState = {
      newRow: false,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }
  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}