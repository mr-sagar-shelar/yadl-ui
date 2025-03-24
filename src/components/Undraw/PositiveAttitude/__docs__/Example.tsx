import React, { FC } from "react";
  import PositiveAttitude from "../PositiveAttitude";
  
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
        <PositiveAttitude width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  