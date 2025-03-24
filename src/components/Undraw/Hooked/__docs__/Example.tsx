import React, { FC } from "react";
  import Hooked from "../Hooked";
  
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
        <Hooked width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  