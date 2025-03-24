import React, { FC } from "react";
  import Keyspaces from "../Keyspaces";
  
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
        <Keyspaces width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  