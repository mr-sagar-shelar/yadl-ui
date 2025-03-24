import React, { FC } from "react";
  import InNoTimeInNoTime from "../InNoTimeInNoTime";
  
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
        <InNoTimeInNoTime width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  