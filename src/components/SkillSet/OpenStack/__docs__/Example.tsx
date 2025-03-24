import React, { FC } from "react";
  import OpenStack from "../OpenStack";
  
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
        <OpenStack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  