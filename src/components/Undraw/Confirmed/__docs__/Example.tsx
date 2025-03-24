import React, { FC } from "react";
  import Confirmed from "../Confirmed";
  
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
        <Confirmed width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  