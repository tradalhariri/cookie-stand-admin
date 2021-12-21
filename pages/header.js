import React from 'react';


const Header = (props) => {
    return (
    <header className="flex justify-between bg-[#15B981] py-4 items-center">
        <h1 className="text-4xl mx-1">{props.title}</h1>
      </header>
    );
};



export default Header;
