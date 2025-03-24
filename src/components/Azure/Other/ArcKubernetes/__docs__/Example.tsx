import React, { FC } from "react";
  import ArcKubernetes from "../ArcKubernetes";
  
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
        <ArcKubernetes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  