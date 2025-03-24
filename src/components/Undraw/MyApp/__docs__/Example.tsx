import React, { FC } from "react";
  import MyApp from "../MyApp";
  
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
        <MyApp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  