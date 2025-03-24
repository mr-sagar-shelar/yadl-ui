import React, { FC } from "react";
  import Disks from "../Disks";
  
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
        <Disks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  