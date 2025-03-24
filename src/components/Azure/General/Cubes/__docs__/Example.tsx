import React, { FC } from "react";
  import Cubes from "../Cubes";
  
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
        <Cubes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  