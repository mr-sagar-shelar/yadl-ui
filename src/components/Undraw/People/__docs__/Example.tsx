import React, { FC } from "react";
  import People from "../People";
  
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
        <People width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  