import React, { FC } from "react";
  import Camping from "../Camping";
  
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
        <Camping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  