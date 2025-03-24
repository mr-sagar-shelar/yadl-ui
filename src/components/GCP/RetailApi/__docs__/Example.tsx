import React, { FC } from "react";
  import RetailApi from "../RetailApi";
  
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
        <RetailApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  