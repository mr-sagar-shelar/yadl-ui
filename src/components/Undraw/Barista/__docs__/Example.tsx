import React, { FC } from "react";
  import Barista from "../Barista";
  
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
        <Barista width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  