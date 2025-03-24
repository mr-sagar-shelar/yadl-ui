import React, { FC } from "react";
  import Contemplating from "../Contemplating";
  
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
        <Contemplating width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  