import React, { FC } from "react";
  import Hosts from "../Hosts";
  
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
        <Hosts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  