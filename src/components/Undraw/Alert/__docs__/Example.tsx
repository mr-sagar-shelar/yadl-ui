import React, { FC } from "react";
  import Alert from "../Alert";
  
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
        <Alert width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  