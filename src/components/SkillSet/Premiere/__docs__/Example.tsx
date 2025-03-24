import React, { FC } from "react";
  import Premiere from "../Premiere";
  
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
        <Premiere width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  