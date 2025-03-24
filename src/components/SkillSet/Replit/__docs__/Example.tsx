import React, { FC } from "react";
  import Replit from "../Replit";
  
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
        <Replit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  