import React, { FC } from "react";
  import Dataproc from "../Dataproc";
  
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
        <Dataproc width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  