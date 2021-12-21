import React from 'react';


const Header = (props) => {
    return (
    <header className="flex justify-between bg-[#15B981] py-4 items-center">
        <h1 className="text-4xl mx-1">{props.title}</h1>
        <div className="bg-white text-1xl mx-2 py-1 px-2">
        <h2>Overview</h2>

        </div>
      </header>
    );
};



export default Header;
