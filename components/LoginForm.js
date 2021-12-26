import React from 'react';
import { useState} from 'react'

import { useAuth } from "../contexts/auth";

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const hanldeLogin = (e) => {
    e.preventDefault();
    login(username,password);
  };
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full my-20 text-center bg-green-50">
        <div className="flex w-2/3 bg-green-200 rounded-lg">
            <form className = "w-full px-10 py-5 border-4 border-green-500 border-solid rounded-xl" onSubmit = {hanldeLogin}>
                <div className="w-full px-3 ">
                    <label className="block w-full my-2 mt-5 text-xl font-bold tracking-wide text-gray-800 " for="userName">
                        USER NAME
                    </label>
                    <input className="block w-full px-4 py-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 border-solid appearance-none focus:outline-none focus:bg-white focus:border-gray-200" name="username" id="username" type="text" placeholder = "User Name" required onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className="w-full px-3 mt-5">
                    <label className="block w-full my-2 mt-5 text-xl font-bold tracking-wide text-gray-800" for="password">
                        PASSWORD
                    </label>
                    <input className="block w-full px-4 py-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 appearance-none focus:outline-none focus:bg-white focus:border-gray-200" name="password" id="password" type="password" placeholder = "password" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div className="w-full px-3 mt-10">
                    <button className="block w-full px-4 py-10 mb-5 text-3xl font-bold text-gray-800 bg-green-500 rounded hover:bg-green-600 active:bg-green-400">
                        SIGN IN
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default LoginForm;
