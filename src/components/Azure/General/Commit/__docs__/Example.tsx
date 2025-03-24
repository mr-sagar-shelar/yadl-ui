import React, { FC } from "react";
  import Commit from "../Commit";
  
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
        <Commit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  