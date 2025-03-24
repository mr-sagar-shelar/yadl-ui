import React, { FC } from "react";
  import Settings from "../Settings";
  
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
        <Settings width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  