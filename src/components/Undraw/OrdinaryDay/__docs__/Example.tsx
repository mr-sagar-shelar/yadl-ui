import React, { FC } from "react";
  import OrdinaryDay from "../OrdinaryDay";
  
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
        <OrdinaryDay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  