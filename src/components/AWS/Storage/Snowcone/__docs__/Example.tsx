import React, { FC } from "react";
  import Snowcone from "../Snowcone";
  
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
        <Snowcone width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  