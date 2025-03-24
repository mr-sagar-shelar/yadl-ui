import React, { FC } from "react";
  import MyPassword from "../MyPassword";
  
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
        <MyPassword width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  