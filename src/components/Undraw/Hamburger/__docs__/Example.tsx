import React, { FC } from "react";
  import Hamburger from "../Hamburger";
  
  const Example = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Hamburger width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  