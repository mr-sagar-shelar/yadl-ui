import React, { FC } from "react";
  import CookieLove from "../CookieLove";
  
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
        <CookieLove width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  