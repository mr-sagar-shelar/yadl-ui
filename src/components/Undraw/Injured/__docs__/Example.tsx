import React, { FC } from "react";
  import Injured from "../Injured";
  
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
        <Injured width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  