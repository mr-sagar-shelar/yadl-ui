import React, { FC } from "react";
  import HomeScreen from "../HomeScreen";
  
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
        <HomeScreen width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  