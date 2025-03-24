import React, { FC } from "react";
  import Github from "../Github";
  
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
        <Github width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  