import React, { FC } from "react";
  import V from "../V";
  
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
        <V width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  