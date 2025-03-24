import React, { FC } from "react";
  import LogIn from "../LogIn";
  
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
        <LogIn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  