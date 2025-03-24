import React, { FC } from "react";
  import LoadBalancerHub from "../LoadBalancerHub";
  
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
        <LoadBalancerHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  