import React, { FC } from "react";
  import Laravel from "../Laravel";
  
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
        <Laravel width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  