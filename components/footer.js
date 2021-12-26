import React from "react";
import useResource from "../hooks/useResources";

const Footer = () => {
  const { resources,loading} = useResource();
  console.log("jjjj",resources);


  return (
    <footer className="flex items-center justify-between px-2 py-4 bg-green-500">
      <p className="mx-auto">{!loading? resources.length:0} Location World Wide</p>
    </footer>
  );
};

export default Footer;
