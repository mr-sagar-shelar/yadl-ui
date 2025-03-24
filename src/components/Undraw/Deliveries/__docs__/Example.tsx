import React, { FC } from "react";
  import Deliveries from "../Deliveries";
  
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
        <Deliveries width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  