import React, { FC } from "react";
  import Config from "../Config";
  
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
        <Config width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  