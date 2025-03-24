import React, { FC } from "react";
  import InThought from "../InThought";
  
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
        <InThought width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  