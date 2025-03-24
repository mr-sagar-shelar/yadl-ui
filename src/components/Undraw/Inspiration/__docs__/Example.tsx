import React, { FC } from "react";
  import Inspiration from "../Inspiration";
  
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
        <Inspiration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  