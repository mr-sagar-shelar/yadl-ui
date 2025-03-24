import React, { FC } from "react";
  import Branch from "../Branch";
  
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
        <Branch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  