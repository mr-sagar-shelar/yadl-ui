import React, { FC } from "react";
  import MyAnswer from "../MyAnswer";
  
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
        <MyAnswer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  