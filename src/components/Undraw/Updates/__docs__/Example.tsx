import React, { FC } from "react";
  import Updates from "../Updates";
  
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
        <Updates width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  