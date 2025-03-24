import React, { FC } from "react";
  import PayOnline from "../PayOnline";
  
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
        <PayOnline width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  