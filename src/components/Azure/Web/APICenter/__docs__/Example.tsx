import React, { FC } from "react";
  import APICenter from "../APICenter";
  
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
        <APICenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  