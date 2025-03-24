import React, { FC } from "react";
  import Selenium from "../Selenium";
  
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
        <Selenium width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  