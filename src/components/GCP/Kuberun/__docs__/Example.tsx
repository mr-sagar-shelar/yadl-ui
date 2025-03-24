import React, { FC } from "react";
  import Kuberun from "../Kuberun";
  
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
        <Kuberun width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  