import React, { FC } from "react";
  import Destinations from "../Destinations";
  
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
        <Destinations width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  