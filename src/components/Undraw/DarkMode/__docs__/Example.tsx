import React, { FC } from "react";
  import DarkMode from "../DarkMode";
  
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
        <DarkMode width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  