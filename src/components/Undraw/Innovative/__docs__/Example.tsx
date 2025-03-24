import React, { FC } from "react";
  import Innovative from "../Innovative";
  
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
        <Innovative width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  