import React, { FC } from "react";
  import Energizer from "../Energizer";
  
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
        <Energizer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  