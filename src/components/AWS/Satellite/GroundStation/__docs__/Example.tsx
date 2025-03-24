import React, { FC } from "react";
  import GroundStation from "../GroundStation";
  
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
        <GroundStation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  