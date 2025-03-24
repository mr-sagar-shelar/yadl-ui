import React, { FC } from "react";
  import Firewalls from "../Firewalls";
  
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
        <Firewalls width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  