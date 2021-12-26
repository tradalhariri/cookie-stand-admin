import React from 'react';
import { useAuth } from "../contexts/auth";


const Header = (props) => {
  const { user, logout } = useAuth();
    return (
      <header className="flex flex-row justify-around w-full p-4 align-middle bg-green-500">
      <h1 className="text-2xl">Cookie Stand Admin</h1>
      {user ? (
        <div className="flex justify-center gap-2">
          <button className="p-1 bg-green-200 rounded-lg">
            {user.username}
          </button>
          <button
            onClick={() => logout()}
            className="p-1 text-white bg-green-700 rounded-lg hover:bg-green-600"
          >
            Sign Out
          </button>
          <button className="p-1 bg-green-200 rounded-lg">Overview</button>
        </div>
      ) : null}
    </header>
    );
};



export default Header;
