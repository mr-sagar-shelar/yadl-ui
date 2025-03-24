import React, { FC } from "react";
  import Relays from "../Relays";
  
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
        <Relays width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  