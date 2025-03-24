import React, { FC } from "react";
  import Connectors from "../Connectors";
  
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
        <Connectors width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  