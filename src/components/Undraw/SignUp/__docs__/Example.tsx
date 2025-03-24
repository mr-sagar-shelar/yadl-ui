import React, { FC } from "react";
  import SignUp from "../SignUp";
  
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
        <SignUp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  