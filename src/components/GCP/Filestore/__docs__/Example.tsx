import React, { FC } from "react";
  import Filestore from "../Filestore";
  
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
        <Filestore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  