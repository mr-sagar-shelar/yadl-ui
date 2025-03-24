import React, { FC } from "react";
  import Bastions from "../Bastions";
  
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
        <Bastions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  