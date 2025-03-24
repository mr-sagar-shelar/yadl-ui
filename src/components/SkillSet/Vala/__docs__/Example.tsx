import React, { FC } from "react";
  import Vala from "../Vala";
  
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
        <Vala width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  