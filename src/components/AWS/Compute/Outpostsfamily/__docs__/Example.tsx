import React, { FC } from "react";
  import Outpostsfamily from "../Outpostsfamily";
  
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
        <Outpostsfamily width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  