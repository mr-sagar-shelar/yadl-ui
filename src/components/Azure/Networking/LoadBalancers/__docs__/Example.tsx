import React, { FC } from "react";
  import LoadBalancers from "../LoadBalancers";
  
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
        <LoadBalancers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  