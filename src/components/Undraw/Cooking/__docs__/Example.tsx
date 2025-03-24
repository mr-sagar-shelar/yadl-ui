import React, { FC } from "react";
  import Cooking from "../Cooking";
  
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
        <Cooking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  