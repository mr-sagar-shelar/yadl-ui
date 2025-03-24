import React, { FC } from "react";
  import ExpressRouteDirect from "../ExpressRouteDirect";
  
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
        <ExpressRouteDirect width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  