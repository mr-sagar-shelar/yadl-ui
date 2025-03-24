import React, { FC } from "react";
  import Peerings from "../Peerings";
  
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
        <Peerings width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  