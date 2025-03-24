import React, { FC } from "react";
  import Rocket from "../Rocket";
  
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
        <Rocket width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  