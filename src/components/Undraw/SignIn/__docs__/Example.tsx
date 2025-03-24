import React, { FC } from "react";
  import SignIn from "../SignIn";
  
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
        <SignIn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  