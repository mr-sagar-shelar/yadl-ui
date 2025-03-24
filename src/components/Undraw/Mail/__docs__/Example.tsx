import React, { FC } from "react";
  import Mail from "../Mail";
  
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
        <Mail width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  