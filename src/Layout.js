import React from "react";

import Navbar from "./components/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <h1>Hasta Luego</h1>
    </>
  );
};

export default Layout;
