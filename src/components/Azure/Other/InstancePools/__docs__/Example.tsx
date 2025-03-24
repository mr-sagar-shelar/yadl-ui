import React, { FC } from "react";
  import InstancePools from "../InstancePools";
  
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
        <InstancePools width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  