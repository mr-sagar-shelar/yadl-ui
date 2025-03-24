import React, { FC } from "react";
  import Git from "../Git";
  
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
        <Git width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  