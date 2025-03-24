import React, { FC } from "react";
  import MelloMello from "../MelloMello";
  
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
        <MelloMello width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  