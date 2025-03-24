import React, { FC } from "react";
  import Launching from "../Launching";
  
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
        <Launching width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  