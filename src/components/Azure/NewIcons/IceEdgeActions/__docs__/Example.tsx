import React, { FC } from "react";
  import IceEdgeActions from "../IceEdgeActions";
  
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
        <IceEdgeActions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  