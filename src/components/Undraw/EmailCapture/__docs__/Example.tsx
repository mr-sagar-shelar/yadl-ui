import React, { FC } from "react";
  import EmailCapture from "../EmailCapture";
  
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
        <EmailCapture width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  