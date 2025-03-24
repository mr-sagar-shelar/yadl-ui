import React, { FC } from "react";
  import KubernetesFleetManager from "../KubernetesFleetManager";
  
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
        <KubernetesFleetManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  