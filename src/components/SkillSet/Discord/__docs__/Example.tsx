import React, { FC } from "react";
  import Discord from "../Discord";
  
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
        <Discord width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  