import React, { FC } from "react";
  import Externalid from "../Externalid";
  
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
        <Externalid width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  