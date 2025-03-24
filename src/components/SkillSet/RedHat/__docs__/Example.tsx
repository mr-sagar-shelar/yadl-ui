import React, { FC } from "react";
  import RedHat from "../RedHat";
  
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
        <RedHat width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  