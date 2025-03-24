import React, { FC } from "react";
  import Responsiveness from "../Responsiveness";
  
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
        <Responsiveness width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  