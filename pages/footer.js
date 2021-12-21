import React from "react";

const Footer = ({ locationsNum }) => {
  return (
    <footer className="flex justify-between bg-[#15B981] py-4 px-2 items-center">
      <p>{locationsNum} Location World Wide</p>
    </footer>
  );
};

export default Footer;
