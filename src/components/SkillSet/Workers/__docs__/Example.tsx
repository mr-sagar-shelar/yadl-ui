import React, { FC } from "react";
  import Workers from "../Workers";
  
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
        <Workers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  